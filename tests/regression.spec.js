const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const users = require('../data/users.json');

test('TC07 - Logout Test', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login(users.validUser.email, users.validUser.password);

    // ✅ wait for dashboard (login success)
    await expect(page.locator('text=Log out')).toBeVisible();

    // ✅ logout
    await page.click('text=Log out');

    // ✅ validate back to login page
    await expect(page.locator('#email')).toBeVisible();
});