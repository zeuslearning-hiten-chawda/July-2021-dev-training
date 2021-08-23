import { TestBed } from '@angular/core/testing';

import { WalkinServiceService } from './walkin-service.service';

describe('WalkinServiceService', () => {
  let service: WalkinServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalkinServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
