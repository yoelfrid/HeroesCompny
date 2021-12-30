import { TestBed } from '@angular/core/testing';

import { LoggerGuard } from './logger.guard';

describe('LogerGuard', () => {
  let guard: LoggerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoggerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
