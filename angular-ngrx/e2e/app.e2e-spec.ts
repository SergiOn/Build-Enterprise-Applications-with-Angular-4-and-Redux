import { AngularReduxPage } from './app.po';

describe('angular-ngrx App', () => {
  let page: AngularReduxPage;

  beforeEach(() => {
    page = new AngularReduxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
