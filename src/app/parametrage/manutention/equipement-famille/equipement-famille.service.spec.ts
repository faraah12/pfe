import { TestBed } from '@angular/core/testing';

import { EquipementFamilleService } from './equipement-famille.service';

describe('EquipementFamilleService', () => {
  let service: EquipementFamilleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipementFamilleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
