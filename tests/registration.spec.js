const { test } = require('@playwright/test');
const RegistrationPage = require('../pages/RegistrationPage');
const users = require('../data/users.json');

test('TC03 - User Registration', async ({ page }) => {
    const reg = new RegistrationPage(page);
    await page.goto('https://demo.guru99.com/insurance/v1/index.php');
    await reg.gotoRegister();
    await reg.register(users.validUser);
});

test('TC04 - Registration with missing fields', async ({ page }) => {
    const reg = new RegistrationPage(page);
    await page.goto('https://demo.guru99.com/insurance/v1/index.php');
    await reg.gotoRegister();
    await reg.register({ firstname: '', lastname: '' });
});