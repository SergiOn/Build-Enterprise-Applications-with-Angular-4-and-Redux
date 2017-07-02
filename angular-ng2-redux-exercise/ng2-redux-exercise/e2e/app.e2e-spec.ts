import { Ng2ReduxExercisePage } from './app.po';

describe('ng2-redux-exercise App', () => {
  let page: Ng2ReduxExercisePage;

  beforeEach(() => {
    page = new Ng2ReduxExercisePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
