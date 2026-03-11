# Playwright Login Automation Framework

## Project Overview

This project demonstrates automated testing of a web application's login functionality using Playwright with TypeScript.
It implements industry-standard automation practices such as Page Object Model (POM), automated test reporting, and failure screenshots.

The project tests multiple login scenarios on a demo website and validates the application's behavior using assertions.

## Website Tested

https://practicetestautomation.com/practice-test-login/

## Test Scenarios Covered

1. **Valid Login**

   * Enter correct username and password
   * Verify successful login page

2. **Invalid Login**

   * Enter incorrect username or password
   * Verify the error message displayed

3. **Empty Fields Login**

   * Click login without entering credentials
   * Verify validation/error message

## Tools and Technologies

* Playwright
* TypeScript
* Node.js
* GitHub Codespaces
* GitHub Actions (CI/CD)

## Framework Features

* Automated browser testing using Playwright
* Page Object Model (POM) implementation
* Screenshot capture on test failure
* HTML test reporting
* Continuous Integration using GitHub Actions

## Project Structure

```
playwright-login-automation
│
├── pages
│   └── LoginPage.ts
│
├── tests
│   └── login.spec.ts
│
├── .github
│   └── workflows
│       └── playwright.yml
│
├── playwright.config.ts
├── package.json
└── README.md
```

## Page Object Model

The Page Object Model pattern is used to separate test logic from page actions.
The `LoginPage.ts` file contains methods for interacting with the login page such as navigation and performing login actions.

## Running the Tests

### 1. Install dependencies

```
npm install
```

### 2. Install Playwright browsers

```
npx playwright install
```

### 3. Run all tests

```
npx playwright test
```

### 4. Run tests with HTML report

```
npx playwright test --reporter=html
```

### 5. Open the test report

```
npx playwright show-report
```

## Failure Screenshots

Screenshots are automatically captured when a test fails.
These screenshots are stored inside the `test-results` folder for debugging purposes.

## Continuous Integration

This project uses GitHub Actions to automatically run tests whenever code is pushed to the repository.

Workflow file location:

```
.github/workflows/playwright.yml
```

## Expected Outcome

All test cases should pass successfully when the application behaves as expected.
If any test fails, Playwright captures logs, screenshots, and reports for debugging.

## Author

Anwesha Datta
