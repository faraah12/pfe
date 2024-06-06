import { TestBed } from '@angular/core/testing';

import { ModeTheoriqueService } from './mode-theorique.service';

describe('ModeTheoriqueService', () => {
  let service: ModeTheoriqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModeTheoriqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
