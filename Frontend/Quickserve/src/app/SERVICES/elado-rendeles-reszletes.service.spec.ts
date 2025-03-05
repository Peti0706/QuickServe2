import { TestBed } from '@angular/core/testing';

import { EladoRendelesReszletesService } from './elado-rendeles-reszletes.service';

describe('EladoRendelesReszletesService', () => {
  let service: EladoRendelesReszletesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EladoRendelesReszletesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
