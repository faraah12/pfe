import { TestBed } from '@angular/core/testing';

import { ModeTravailLogistiqueService } from './mode-travail-logistique.service';

describe('ModeTravailLogistiqueService', () => {
  let service: ModeTravailLogistiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModeTravailLogistiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
