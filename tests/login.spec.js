const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const users = require('../data/users.json');

test('TC01 - Valid Login', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login(users.validUser.email, users.validUser.password);

    // ✅ wait for dashboard element instead of URL
    await expect(page.locator('text=Log out')).toBeVisible({ timeout: 10000 });
});