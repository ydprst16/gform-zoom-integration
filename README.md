# 🚀 Google Form Zoom Integration

## 📝 Description
This script seamlessly integrates **Google Forms** with **Zoom**, enabling automatic creation of Zoom meeting links based on form submissions. It simplifies the process of scheduling meetings by automating link generation and email notifications.

---

## ✨ Features
- 🔗 Automatically generate Zoom meeting links upon form submission.  
- 📋 Retrieve and process form responses easily.  
- 📧 Send notifications with meeting details directly to respondents.

---

## ✅ Requirements
- ✅ **Google Account** with access to Google Forms.  
- ✅ **Zoom API Credentials** (API Key and Secret).  
- ✅ Access to the **Google Apps Script Editor**.

---

## ⚙️ Steps to Enable Zoom API on Zoom Marketplace

1. **🔑 Log in to Zoom Marketplace**  
   - Go to the [Zoom App Marketplace](https://marketplace.zoom.us/).  
   - Log in using your Zoom account credentials.

2. **⚒️ Create an App**  
   - Click on **Develop > Build App** in the top navigation menu.  
   - Select the app type **Server-to-Server OAuth**.  

3. **📂 Retrieve App Credentials**  
   - Once the app is created, go to the **App Credentials** section.  
   - Copy the **API Key** and **API Secret** for use in the script.

4. **🔧 Enable Required APIs**  
   - Navigate to the **Scopes/Features** section of your app.  
   - Enable the following scopes for meeting creation:  
     - `meeting:write:meeting:admin`  
     - `user:read:user:admin`  
     *(Add more scopes if needed based on your use case.)*

5. **✅ Activate the App**  
   - Test your app by clicking **Activate App**.  
   - Ensure that your app is in **Development** or **Production** mode based on your requirements.

---

## 📋 Google Form Setup

To integrate this project with Google Forms, follow these steps:

### **1. Create or Open a Google Form**
- Go to [Google Forms](https://forms.google.com/).  
- Create a new form or open an existing one.  
- Add the necessary fields, such as:
  - **Name** (Short answer)  
  - **Email Address** (Short answer)  
  - **Date** (Include Time)  
  - **Meeting Topic** (Short answer or paragraph)  
  - **Duration** (Short answer, with response validation as a number)

---

### **2. Link Google Form to Apps Script**
1. Open your Google Form.  
2. Click on **Extensions > Apps Script** in the top menu.  
3. This will open the **Apps Script Editor** in a new tab.

---

### **3. Add the Script**
1. Replace the default code in the editor with the script provided in this repository.  
2. Modify the script as needed to match the fields in your Google Form (e.g., adjust field names for email, topic, etc.).

---

### **4. Set Up a Trigger**
1. In the **Apps Script Editor**, click on the clock icon (Triggers) in the left-hand menu.  
2. Click **Add Trigger** and configure the following:
   - **Function to run:** `onFormSubmit`  
   - **Deployment type:** `Head`  
   - **Event source:** `From form`  
   - **Type of trigger:** `On form submit`  
3. Save the trigger and authorize any required permissions.


🎉 With this setup, your Google Form will automatically create Zoom meeting links for every form submission and send notifications with meeting details to respondents.  
