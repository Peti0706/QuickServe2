import { TestBed } from '@angular/core/testing';

import { EladoRendelesekService } from './elado-rendelesek.service';

describe('EladoRendelesekService', () => {
  let service: EladoRendelesekService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EladoRendelesekService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
