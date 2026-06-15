import { expect, test } from '@playwright/test'

test('shows the example app home page', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', { name: 'Mi Primer App' }),
  ).toBeVisible()
  await expect(page.getByText('Container/Presentational pattern')).toBeVisible()
})
