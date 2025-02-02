// Configuration Zoom OAuth
const CLIENT_ID = 'your_client_id';
const CLIENT_SECRET = 'your_client_secret';
const ACCOUNT_ID = 'your_account_id';

// Fungsi untuk mendapatkan Access Token
function getAccessToken() {
  const tokenUrl = `https://us05web.zoom.us/oauth/token?grant_type=account_credentials&account_id=${ACCOUNT_ID}`;
  
  const options = {
    method: 'post',
    headers: {
      'Authorization': 'Basic ' + Utilities.base64Encode(CLIENT_ID + ':' + CLIENT_SECRET),
    },
    muteHttpExceptions: true,
  };

  try {
    const response = UrlFetchApp.fetch(tokenUrl, options);
    const statusCode = response.getResponseCode();
    const content = response.getContentText();
    Logger.log(`HTTP Status Code: ${statusCode}`);
    Logger.log(`Response Content: ${content}`);

    if (statusCode === 200) {
      const result = JSON.parse(content);
      Logger.log(`Access Token: ${result.access_token}`);
      return result.access_token;
    } else {
      throw new Error(`Failed to get access token. Status Code: ${statusCode}`);
    }
  } catch (error) {
    Logger.log(`Error: ${error.message}`);
    throw new Error(`Failed to get access token: ${error.message}`);
  }
}

// Fungsi untuk membuat meeting Zoom
function scheduleZoomMeeting() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const lastRow = sheet.getLastRow();
  const lastColumn = sheet.getLastColumn();
  let linkColumn;
  let passcodeColumn;

  // Cek apakah kolom "Link Zoom" dan "Passcode" sudah ada
  const headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
  for (let i = 0; i < headers.length; i++) {
    if (headers[i] === "Link Zoom") {
      linkColumn = i + 1;
    }
    if (headers[i] === "Passcode") {
      passcodeColumn = i + 1;
    }
  }

  // Jika belum ada, tambahkan kolom baru
  if (!linkColumn) {
    linkColumn = lastColumn + 1;
    sheet.getRange(1, linkColumn).setValue("Link Zoom");
    lastColumn++; // Tambahkan ke lastColumn untuk cek Passcode
  }

  if (!passcodeColumn) {
    passcodeColumn = lastColumn + 1;
    sheet.getRange(1, passcodeColumn).setValue("Passcode");
  }

  const rowData = sheet.getRange(lastRow, 1, 1, lastColumn).getValues()[0];
  const dateTime = rowData[3]; // Asumsi kolom tanggal di indeks 3

  // Validasi apakah dateTime adalah tanggal yang valid
  const date = new Date(dateTime);
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date format. Please provide a valid date.');
  }

  const startTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();

  // Generate passcode (bisa diubah sesuai kebutuhan)
  const passcode = Math.random().toString(36).substring(2, 8).toUpperCase();
  //const passcode = "12345"; //static_passcode

  const payload = {
    topic: rowData[4], // Asumsi kolom topik di indeks 4
    type: 2,
    start_time: startTime,
    duration: parseInt(rowData[5], 10) || 60, // Default to 60 minutes
    timezone: 'Asia/Jakarta',
    password: passcode,
    settings: {
      host_video: true,
      participant_video: true,
    },
  };

  const options = {
    method: 'post',
    contentType: 'application/json',
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true,
  };

  try {
    const response = UrlFetchApp.fetch('https://api.zoom.us/v2/users/me/meetings', options);
    const statusCode = response.getResponseCode();
    const content = response.getContentText();

    if (statusCode === 201) {
      const meeting = JSON.parse(content);
      sheet.getRange(lastRow, linkColumn).setValue(meeting.join_url);
      sheet.getRange(lastRow, passcodeColumn).setValue(passcode);
    } else {
      throw new Error(`Failed to create Zoom meeting. Status Code: ${statusCode}, Content: ${content}`);
    }
  } catch (error) {
    Logger.log(`Error: ${error.message}`);
    throw new Error(`Failed to schedule Zoom meeting: ${error.message}`);
  }
}

// Fungsi trigger untuk menangani setiap kali form di-submit
function onFormSubmit(e) {
  scheduleZoomMeeting();
}
