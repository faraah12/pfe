import { TestBed } from '@angular/core/testing';

import { EquipeService } from './equipe.service';

describe('EquipeServiceService', () => {
  let service: EquipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
