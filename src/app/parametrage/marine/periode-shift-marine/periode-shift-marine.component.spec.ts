import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodeShiftMarineComponent } from './periode-shift-marine.component';

describe('PeriodeShiftMarineComponent', () => {
  let component: PeriodeShiftMarineComponent;
  let fixture: ComponentFixture<PeriodeShiftMarineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeriodeShiftMarineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeriodeShiftMarineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
