import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanRoulementMarineComponent } from './plan-roulement-marine.component';

describe('PlanRoulementMarineComponent', () => {
  let component: PlanRoulementMarineComponent;
  let fixture: ComponentFixture<PlanRoulementMarineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanRoulementMarineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanRoulementMarineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
