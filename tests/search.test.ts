import { test, expect, Page } from '@playwright/test';

// Test Case 1: Search for a specific article
test('Search for a specific article', async ({ page }: { page: Page }) => {
  // Step 1: Go to the search bar
  await page.goto('https://onlinelibrary.wiley.com/'); 

  // Step 2: Enter a keyword related to a specific article
  await page.fill('input[name="search"]', 'machine learning');

  // Step 3: Click the search button
  await page.click('button[type="submit"]');

  // Step 4: Wait for search results to load
  await page.waitForSelector('https://onlinelibrary.wiley.com/action/doSearch?AllField=machine+learning');

  // Step 5: Check if there are articles displayed
  const articles = await page.locator('https://onlinelibrary.wiley.com/action/doSearch?AllField=machine+learning'); 
  await expect(articles).toHaveCountGreaterThan(0); 
});
