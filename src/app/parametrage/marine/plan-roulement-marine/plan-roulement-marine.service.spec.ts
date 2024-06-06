import { TestBed } from '@angular/core/testing';

import { PlanRoulementMarineService } from './plan-roulement-marine.service';

describe('PlanRoulementMarineService', () => {
  let service: PlanRoulementMarineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanRoulementMarineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
