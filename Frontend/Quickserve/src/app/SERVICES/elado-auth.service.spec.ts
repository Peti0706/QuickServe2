import { TestBed } from '@angular/core/testing';

import { EladoAuthService } from './elado-auth.service';

describe('EladoAuthService', () => {
  let service: EladoAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EladoAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
