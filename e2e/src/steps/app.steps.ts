import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given(/^I am on the home page$/, async () => {
  await page.navigateTo();
});

When(/^I do nothing$/, () => {});

Then(/^I should see the title$/, async () => {
  expect(await page.getTitleText()).to.equal('Cetriolo app!');
});

Given(/^I am on the About page$/, async () => {
  await page.navigateToAbout();
});

When(/^I click on cetriolo button$/, async () => {
  expect(await page.clickCetrioloButton());
});

Then(/^I see cucumber image$/, async () => {
  expect(await page.hasCucumberImage()).to.be.true;
});
