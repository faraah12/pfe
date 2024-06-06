import { TestBed } from '@angular/core/testing';

import { EquipeMarineService } from './equipe-marine.service';

describe('EquipeMarineService', () => {
  let service: EquipeMarineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipeMarineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
