import { Ng2WorkshopPage } from './app.po';

describe('ng2-workshop App', function() {
  let page: Ng2WorkshopPage;

  beforeEach(() => {
    page = new Ng2WorkshopPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-workshop works!');
  });
});
