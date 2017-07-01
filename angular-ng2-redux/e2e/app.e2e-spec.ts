import { AngularNg2ReduxPage } from './app.po';

describe('angular-ng2-redux App', () => {
  let page: AngularNg2ReduxPage;

  beforeEach(() => {
    page = new AngularNg2ReduxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
