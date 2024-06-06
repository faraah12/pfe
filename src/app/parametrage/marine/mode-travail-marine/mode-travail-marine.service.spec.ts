import { TestBed } from '@angular/core/testing';

import { ModeTravailMarineService } from './mode-travail-marine.service';

describe('ModeTravailMarineService', () => {
  let service: ModeTravailMarineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModeTravailMarineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
