import { test, expect } from '@playwright/test';

test.describe('Login Page Tests', () => {

  test('Valid Login Test', async ({ page }) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    
    await page.waitForSelector('#username');

    await page.fill('#username', 'student');
    await page.fill('#password', 'Password123');

    await page.click('#submit');

    await page.waitForURL('https://practicetestautomation.com/logged-in-successfully/');

    await expect(page.locator('h1')).toHaveText('Logged In Successfully');
  });


  test('Invalid Login Test', async ({ page }) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    
    await page.waitForSelector('#username');

    await page.fill('#username', 'wronguser');
    await page.fill('#password', 'wrongpass');

    await page.click('#submit');

    const errorMessage = page.locator('#error');

    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Your username is invalid!');
  });


  test('Empty Fields Test', async ({ page }) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    
    await page.waitForSelector('#submit');

    await page.click('#submit');

    const errorMessage = page.locator('#error');

    await expect(errorMessage).toBeVisible();
  });

});