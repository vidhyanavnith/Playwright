import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('link', { name: 'Gmail' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Sign into Gmail' }).click();
  const page1 = await page1Promise;
  await page.goto('https://www.google.com/');
  await page.getByRole('link', { name: 'Store' }).click();
  await page.locator('[data-test="nav-links"]').getByRole('link', { name: 'Support' }).click();
});