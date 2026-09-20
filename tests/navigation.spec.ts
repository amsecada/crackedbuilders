import { expect, test } from '@playwright/test';

test('every primary menu item reaches a unique anchor inside main', async ({ page }) => {
  await page.goto('./');

  const navigation = page.getByRole('navigation', { name: 'Primary navigation' });
  const menuItems = navigation.getByRole('link');
  const itemCount = await menuItems.count();

  expect(itemCount).toBeGreaterThan(0);

  for (let index = 0; index < itemCount; index += 1) {
    const menuItem = menuItems.nth(index);
    const label = (await menuItem.textContent())?.trim() || `item ${index + 1}`;
    const href = await menuItem.getAttribute('href');

    expect(href, `${label} must link to a page fragment`).toMatch(/^#[^#]+$/);

    const targetId = href!.slice(1);
    const target = page.locator('main').locator(`[id="${targetId}"]`);

    await expect(target, `${label} must have one matching target inside main`).toHaveCount(1);
    await menuItem.click();
    await expect(page, `${label} must update the URL fragment`).toHaveURL(
      new RegExp(`#${targetId}$`),
    );
    await expect(target, `${label} target must be visible`).toBeVisible();

    const [headerBox, targetBox] = await Promise.all([
      page.locator('.site-header').boundingBox(),
      target.boundingBox(),
    ]);

    expect(headerBox, 'The sticky site header must have a rendered box').not.toBeNull();
    expect(targetBox, `${label} target must have a rendered box`).not.toBeNull();
    expect(
      targetBox!.y,
      `${label} target must not be obscured by the sticky header`,
    ).toBeGreaterThanOrEqual(headerBox!.y + headerBox!.height);
  }
});

test('social profiles resolve externally while LinkedIn remains offline', async ({ page }) => {
  await page.goto('./');

  const socialLinks = page.getByRole('list', { name: 'Social links' });
  const expectedProfiles = [
    ['X / Twitter', 'https://x.com/AdamSecada'],
    ['TikTok', 'https://www.tiktok.com/@doublecli.cc'],
    ['Instagram', 'https://www.instagram.com/adam.secada/'],
    ['Facebook', 'https://www.facebook.com/adamsecada'],
  ];

  for (const [label, url] of expectedProfiles) {
    const link = socialLinks.getByRole('link', { name: new RegExp(label, 'i') });
    await expect(link).toHaveAttribute('href', url);
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  }

  await expect(socialLinks.getByText('LinkedIn')).toBeVisible();
  await expect(socialLinks.getByRole('link', { name: /LinkedIn/i })).toHaveCount(0);
  await expect(socialLinks.getByText('Offline / rebuilding')).toBeVisible();
});

test('essay opens outside page flow and supports navigation and dismissal', async ({ page }) => {
  await page.goto('./');
  const trigger = page.getByRole('button', { name: /ESSAY \/ 001/ });
  await trigger.scrollIntoViewIfNeeded();
  const height = await page.locator('body').evaluate(element => element.scrollHeight);
  await trigger.click();
  const reader = page.getByRole('dialog');
  await expect(reader).toBeVisible();
  expect(await page.locator('body').evaluate(element => element.scrollHeight)).toBe(height);
  const box = await reader.boundingBox();
  expect(box!.width).toBeGreaterThan(Math.min(900, page.viewportSize()!.width - 32));
  await page.getByLabel('Jump to section').selectOption({ index: 2 });
  expect(await reader.evaluate(element => element.scrollTop)).toBeGreaterThan(0);
  await expect(reader.getByRole('button', { name: 'Close', exact: true })).toBeInViewport();
  await page.keyboard.press('Escape');
  await expect(reader).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await reader.getByRole('button', { name: 'Close', exact: true }).click();
  await expect(reader).not.toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});
