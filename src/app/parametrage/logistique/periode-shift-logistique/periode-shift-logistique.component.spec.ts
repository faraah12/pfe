import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodeShiftLogistiqueComponent } from './periode-shift-logistique.component';

describe('PeriodeShiftLogistiqueComponent', () => {
  let component: PeriodeShiftLogistiqueComponent;
  let fixture: ComponentFixture<PeriodeShiftLogistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeriodeShiftLogistiqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeriodeShiftLogistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
