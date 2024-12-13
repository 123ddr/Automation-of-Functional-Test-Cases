import { test, expect, Page } from '@playwright/test';

// Test Case 2: User Login
test('User Login', async ({ page }: { page: Page }) => {
  // Step 1: Click on the "Login" button
  await page.goto('https://wiley.scienceconnect.io/login'); 
  await page.click('text="Login"');

  // Step 2: Enter valid username and password
  await page.fill('input[name="email"]', 'dumindudananjaya123@gmail.com');
  await page.fill('input[name="password"]', 'securepassword');

  // Step 3: Click "Submit"
  await page.click('button[type="submit"]');

  // Expected Result: The user is logged in successfully and redirected to the homepage
  await expect(page).toHaveURL('https://onlinelibrary.wiley.com/');
  const welcomeMessage = await page.locator('text="Welcome, Dumindu"');
  await expect(welcomeMessage).toBeVisible();
});
