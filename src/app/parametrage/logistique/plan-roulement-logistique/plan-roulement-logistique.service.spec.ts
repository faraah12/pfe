import { TestBed } from '@angular/core/testing';

import { PlanRoulementLogistiqueService } from './plan-roulement-logistique.service';

describe('PlanRoulementLogistiqueService', () => {
  let service: PlanRoulementLogistiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanRoulementLogistiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
