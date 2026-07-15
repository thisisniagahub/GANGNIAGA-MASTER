import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should display main elements', async ({ page }) => {
    await page.goto('/');

    // Check sidebar elements
    await expect(page.locator('h2', { hasText: 'Executive OS' })).toBeVisible();
    await expect(page.locator('button', { hasText: 'Initialize Memory' })).toBeVisible();

    // Check header
    await expect(page.locator('h1', { hasText: 'Executive Intelligence Core' })).toBeVisible();

    // Check initial chat message
    await expect(page.locator('.ai-message')).toContainText('Selamat datang ke GangNiaga Executive OS');

    // Check input form
    await expect(page.locator('input[placeholder="Tanya soalan eksekutif..."]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('should send a message and show typing indicator', async ({ page }) => {
    await page.goto('/');

    // Intercept the API call to mock response
    await page.route('/api/knowledge/ask', async route => {
      // Simulate delay for typing indicator
      await new Promise(r => setTimeout(r, 500));
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ answer: 'This is a mock answer', contextUsed: [] }),
      });
    });

    const input = page.locator('input[placeholder="Tanya soalan eksekutif..."]');
    await input.fill('What is the company mission?');
    await input.press('Enter');

    // User message should appear
    await expect(page.locator('.user-message')).toContainText('What is the company mission?');

    // Typing indicator should appear
    await expect(page.locator('.typing-indicator')).toBeVisible();

    // AI answer should appear eventually
    await expect(page.locator('.ai-message', { hasText: 'This is a mock answer' })).toBeVisible();
  });

  test('should handle Initialize Memory click', async ({ page }) => {
    await page.goto('/');

    // Intercept seed API call
    await page.route('/api/seed', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Memory successfully initialized!' }),
      });
    });

    const seedBtn = page.locator('button', { hasText: 'Initialize Memory' });
    await seedBtn.click();

    // Should show toast
    await expect(page.locator('.toast')).toContainText('Memory successfully initialized!');
    await expect(page.locator('.toast')).toHaveClass(/show/);
  });
});
