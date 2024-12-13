import { test, expect, Page } from '@playwright/test';

// Test Case 3: Downloading a PDF
test('Downloading a PDF', async ({ page }: { page: Page }) => {
  // Step 1: Navigate to an article
  await page.goto('https://onlinelibrary.wiley.com/doi/10.1002/9781119642183.fmatter'); 

  // Step 2: Click the download button for the PDF version
  const downloadPromise = page.waitForEvent('download'); 
  await page.click('text="Download PDF"');

  const download = await downloadPromise;

  // Expected Result: The PDF is downloaded to the user’s device
  const path = await download.path('https://onlinelibrary.wiley.com/doi/chapter-epub/10.1002/9781119642183.fmatter');
  console.log(`PDF downloaded to: ${path}`);
  expect(path).toBeTruthy();
});
