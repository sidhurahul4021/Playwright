import { test, expect } from '@playwright/test';
import { orangeHRMPage } from '../pages/orangeHRM.page';
import { loginTestData } from '../utils/testData/loginTestData';

test('loginWithValidCredentials', async ({ page }) => {

  const orange = new orangeHRMPage(page);
  const testData = new loginTestData();



  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.waitForLoadState("load");
  //await expect(orange.username).toBeVisible();
  await orange.username.fill(testData.userName.validUserName);
  await orange.password.fill(testData.password.validPassword);
  await page.getByRole('button', { name: 'Login' }).click();
  var text = await page.locator("header h6").textContent ();
  console.log(text);
  await expect(page.locator("header h6")).toHaveText("Dashboard");
  

  
});
test('loginWithInvalidCredentials', async ({ page }) => {

  const orange = new orangeHRMPage(page);
  const testData = new loginTestData();



  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.waitForLoadState("load");
  //await expect(orange.username).toBeVisible();
  await orange.username.fill(testData.userName.inValidUserName);
  await orange.password.fill(testData.password.inValidPassword);
  await page.getByRole('button', { name: 'Login' }).click();
  
  
});




