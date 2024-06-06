import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodeShiftComponent } from './periode-shift.component';

describe('PeriodeShiftComponent', () => {
  let component: PeriodeShiftComponent;
  let fixture: ComponentFixture<PeriodeShiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeriodeShiftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeriodeShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
