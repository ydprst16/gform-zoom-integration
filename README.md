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
