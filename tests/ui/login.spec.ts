import { expect, test } from '@playwright/test';

import { LoginPage } from '../../pages/ LoginPage.ts';

test('user can login into OpenMRS', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.login('admin', 'Admin123');

  await expect(page.getByText('Hello, Super. Welcome to OpenMRS.')).toBeVisible;
});
