import { browser, element, by } from 'protractor';

export class SrHangmanPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sr-root h1')).getText();
  }
}
