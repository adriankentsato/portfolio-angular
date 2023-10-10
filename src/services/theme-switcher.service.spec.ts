/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ThemeSwitcherService } from './theme-switcher.service';

describe('Service: ThemeSwitcher', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeSwitcherService]
    });
  });

  it('should ...', inject([ThemeSwitcherService], (service: ThemeSwitcherService) => {
    expect(service).toBeTruthy();
  }));
});
