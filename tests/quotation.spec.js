const { test } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const QuotationPage = require('../pages/QuotationPage');
const users = require('../data/users.json');
const quoteData = require('../data/quoteData.json');

test('TC05 - Create Insurance Quote', async ({ page }) => {
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
    const quote = new QuotationPage(page);

    await login.goto();
    await login.login(users.validUser.email, users.validUser.password);
    await dashboard.clickQuotation();
    await quote.fillQuotation(quoteData.quote1);
});

test('TC06 - Quote without data', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(users.validUser.email, users.validUser.password);
});