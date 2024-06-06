import { TestBed } from '@angular/core/testing';

import { ModeTheoriqueMarineService } from './mode-theorique-marine.service';

describe('ModeTheoriqueMarineService', () => {
  let service: ModeTheoriqueMarineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModeTheoriqueMarineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
