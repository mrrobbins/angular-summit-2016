import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2WorkshopAppComponent } from '../app/ng2-workshop.component';

beforeEachProviders(() => [Ng2WorkshopAppComponent]);

describe('App: Ng2Workshop', () => {
  it('should create the app',
      inject([Ng2WorkshopAppComponent], (app: Ng2WorkshopAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-workshop works!\'',
      inject([Ng2WorkshopAppComponent], (app: Ng2WorkshopAppComponent) => {
    expect(app.title).toEqual('ng2-workshop works!');
  }));
});
