# Playwright Test Automation

## Overview
This repository contains automated test cases for verifying key functionalities of a web application. The tests cover essential actions such as searching for articles, user login, and downloading a PDF file. The following is a summary of the automated test cases included in this project:

### Test Case 1: Search for a Specific Article
- **Purpose**: To verify that a user can search for articles based on a keyword.
- **Test Steps**:
  1. Navigate to the webpage.
  2. Enter the keyword **"machine learning"** in the search bar.
  3. Click the search button.
  4. Check if the search results display at least one article related to the keyword.
  
- **Expected Outcome**: The page should show a list of articles related to the search term "machine learning".

---

### Test Case 2: User Login
- **Purpose**: To ensure that a user can successfully log in to the application with valid credentials.
- **Test Steps**:
  1. Click on the **"Login"** button.
  2. Enter a valid email and password.
  3. Submit the login form.
  4. Check that the user is redirected to the homepage.
  5. Verify that a welcome message confirming the successful login is displayed.
  
- **Expected Outcome**: The user should be logged in and redirected to the homepage, with a welcome message displayed confirming the successful login.

---

### Test Case 3: Downloading a PDF
- **Purpose**: To verify that the PDF version of an article can be downloaded.
- **Test Steps**:
  1. Navigate to a specific article page.
  2. Click the **"Download PDF"** button.
  3. Wait for the download event to complete.
  4. Check the file path to ensure the PDF was successfully downloaded.
  
- **Expected Outcome**: The PDF file should be downloaded to the user's device.

---

## How to Run the Tests

1. **Install Dependencies**:
    First, you need to install the required dependencies. Run the following command:

    ```bash
    npm install
    ```

2. **Run the Tests**:
    Once the dependencies are installed, you can run the tests using Playwright's test runner. Execute the following command:

    ```bash
    npx playwright test
    ```

3. **Viewing Results**:
    The test results will be displayed in the terminal after the tests have run.



