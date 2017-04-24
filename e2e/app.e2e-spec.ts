import { SrHangmanPage } from './app.po';

describe('sr-hangman App', () => {
  let page: SrHangmanPage;

  beforeEach(() => {
    page = new SrHangmanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sr works!');
  });
});
