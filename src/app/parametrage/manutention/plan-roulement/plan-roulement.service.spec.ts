import { TestBed } from '@angular/core/testing';

import { PlanDeRoulementService } from './plan-roulement.service';

describe('PlanRoulementService', () => {
  let service: PlanDeRoulementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanDeRoulementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
