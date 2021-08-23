import { TestBed } from '@angular/core/testing';

import { ApplicantSideGuard } from './applicant-side.guard';

describe('ApplicantSideGuard', () => {
  let guard: ApplicantSideGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ApplicantSideGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
