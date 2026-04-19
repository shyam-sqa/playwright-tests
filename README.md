[![Playwright Tests](https://github.com/shyam-sqa/playwright-tests/actions/workflows/playwright.yml/badge.svg)](https://github.com/shyam-sqa/playwright-tests/actions/workflows/playwright.yml)  
🚀 Project Overview  
This repository contains a robust, end-to-end UI automation suite designed for the [QA Playground](https://www.qaplayground.com/) application. The framework is built to demonstrate industry-standard testing practices, including the Page Object Model (POM), CI/CD integration, and automated reporting.

🛠️ Technical Stack  
Tool: Playwright (Node.js)

Language: TypeScript  

Reporting: Allure Report & GitHub Actions Artifacts  

CI/CD: GitHub Actions  

Notifications: Slack Integration with dynamic status reporting  

📊 Live Reporting  
The latest execution results, including trends and detailed test logs, are automatically published after every push:  
👉 **[View Latest Allure Report](https://shyam-sqa.github.io/playwright-tests/)**


✨ Key Features  
Scalable POM Architecture: Organized locators and actions for high maintainability.  

Automated Regression Suite: 40+ test cases covering complex UI interactions (Modals, Forms, Dynamic content).  

Smart Notifications: Real-time Slack alerts providing instant feedback on build health (Passed/Failed).  

Cross-Browser Testing: Configured to run across Chromium, Firefox, and WebKit. 
 
🏃 How to Run Locally
1. Clone the repo:
   git clone https://github.com/shyam-sqa/playwright-tests.git
2. Install dependencies:
   npm install
3. Install Playwright Browsers:
   npx playwright install --with-deps
4. Run all tests:
   npx playwright test
5. View Report:
   npx allure serve allure-results
