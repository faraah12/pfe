import { TestBed } from '@angular/core/testing';

import { PeriodeShiftLogistiqueService } from './periode-shift-logistique.service';

describe('PeriodeShiftLogistiqueService', () => {
  let service: PeriodeShiftLogistiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeriodeShiftLogistiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
