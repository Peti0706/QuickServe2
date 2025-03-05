import { TestBed } from '@angular/core/testing';

import { VasarloAuthService } from './vasarlo-auth.service';

describe('VasarloAuthService', () => {
  let service: VasarloAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VasarloAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
