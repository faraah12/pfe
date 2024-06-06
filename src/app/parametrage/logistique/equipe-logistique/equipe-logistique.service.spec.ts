import { TestBed } from '@angular/core/testing';

import { EquipeLogistiqueService } from './equipe-logistique.service';

describe('EquipeLogistiqueService', () => {
  let service: EquipeLogistiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipeLogistiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
