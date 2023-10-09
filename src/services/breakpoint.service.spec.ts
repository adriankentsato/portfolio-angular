/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BreakpointService } from './breakpoint.service';

describe('Service: Breakpoint', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreakpointService]
    });
  });

  it('should ...', inject([BreakpointService], (service: BreakpointService) => {
    expect(service).toBeTruthy();
  }));
});
