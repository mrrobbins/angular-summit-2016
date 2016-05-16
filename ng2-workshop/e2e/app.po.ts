export class Ng2WorkshopPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-workshop-app h1')).getText();
  }
}
