import { TestBed } from '@angular/core/testing';

import { LogerGuard } from './loger.guard';

describe('LogerGuard', () => {
  let guard: LogerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
