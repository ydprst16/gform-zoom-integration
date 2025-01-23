# Google Form Zoom Integration

## Description
This script integrates Google Forms with Zoom to automatically create Zoom meeting links based on form submissions. It simplifies meeting scheduling by automating link generation and notifications.

## Features
- Automatically generate Zoom meeting links.
- Retrieve form responses for processing.

## Requirements
- Google Account with access to Google Forms.
- Zoom API credentials (API Key and Secret).
- App Script Editor access.

### Steps to Enable Zoom API on Zoom Marketplace

1. **Log in to Zoom Marketplace**  
   - Go to the [Zoom App Marketplace](https://marketplace.zoom.us/).  
   - Log in with your Zoom account.

2. **Create an App**  
   - Click on **Develop > Build App** in the top navigation menu.  
   - Select the app type **Server-to-Server OAuth** 

3. **App Credentials**  
   - Once the app is created, you will find your **API Key** and **API Secret** in the "App Credentials" section.  
   - Copy these credentials for later use in the script.

4. **Enable APIs**  
   - Go to the **Scopes/Features** section of your app.  
   - Enable the following scopes for meeting creation:  
     - `meeting:write:meeting:admin`  
     - `user:read:user:admin`  
     *(Include additional scopes if needed based on your use case.)*

5. **Activate the App**  
   - Test the app by clicking **"Activate App"**.  
   - Ensure the app is in **Development** or **Production** mode as required.

### Google Form Setup

To integrate this project with Google Forms, follow these steps:

---

#### **1. Create or Open a Google Form**
- Go to [Google Forms](https://forms.google.com/).  
- Create a new form or open an existing one.  
- Add fields based on your needs. For example:
  - **Name** (Short answer)  
  - **Email Address** (Short answer)
  - **Date** (Include Time)
  - **Meeting Topic** (Short answer or paragraph)
  - **Duration** (Shord answer, response validation: number)
 
---

#### **2. Link Google Form to Apps Script**
1. Open the Google Form.  
2. Click on **Extensions > Apps Script** in the menu bar.  
3. The Apps Script editor will open in a new tab.

---

#### **3. Add the Script to the Apps Script Editor**
1. Replace the default code with the script provided in this repository.  
2. Customize the code as needed (e.g., adjust the email field name to match your form).  

---

#### **4. Set Up a Trigger**
1. In the Apps Script editor, click the clock icon (Triggers) on the left-hand menu.  
2. Click **Add Trigger** and set the following:
   - **Function to run:** `onFormSubmit`  
   - **Deployment type:** `Head`  
   - **Event source:** `From form`  
   - **Type of trigger:** `On form submit`  
3. Save and authorize any necessary permissions.
