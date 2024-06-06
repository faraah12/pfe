import { TestBed } from '@angular/core/testing';

import { PeriodeShiftMarineService } from './periode-shift-marine.service';

describe('PeriodeShiftMarineService', () => {
  let service: PeriodeShiftMarineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeriodeShiftMarineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
