import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { WebsiteAppComponent } from '../app/website.component';

beforeEachProviders(() => [WebsiteAppComponent]);

describe('App: Website', () => {
  it('should create the app',
      inject([WebsiteAppComponent], (app: WebsiteAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'website works!\'',
      inject([WebsiteAppComponent], (app: WebsiteAppComponent) => {
    expect(app.title).toEqual('website works!');
  }));
});
