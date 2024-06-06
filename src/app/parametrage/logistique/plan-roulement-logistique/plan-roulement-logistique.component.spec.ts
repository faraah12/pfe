import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanRoulementLogistiqueComponent } from './plan-roulement-logistique.component';

describe('PlanRoulementLogistiqueComponent', () => {
  let component: PlanRoulementLogistiqueComponent;
  let fixture: ComponentFixture<PlanRoulementLogistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanRoulementLogistiqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanRoulementLogistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
