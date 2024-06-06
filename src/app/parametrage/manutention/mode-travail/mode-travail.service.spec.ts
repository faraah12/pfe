import { TestBed } from '@angular/core/testing';

import { ModeTravailService } from './mode-travail.service';

describe('ModeTravailService', () => {
  let service: ModeTravailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModeTravailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
