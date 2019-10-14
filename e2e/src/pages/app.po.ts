import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  navigateToAbout() {
    return browser.get('/about');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  clickCetrioloButton() {
    return element(by.id('pulsante')).click() as Promise<any>;
  }

  hasCucumberImage() {
    return element(by.id('cucumberLogo')).isPresent() as Promise<any>;
  }
}
