import { TestBed } from '@angular/core/testing';

import { TypeDeTraficService } from './type-de-trafic.service';

describe('TypeDeTraficService', () => {
  let service: TypeDeTraficService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeDeTraficService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
