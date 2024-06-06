import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDeRoulementComponent } from './plan-roulement.component';

describe('PlanRoulementComponent', () => {
  let component: PlanDeRoulementComponent;
  let fixture: ComponentFixture<PlanDeRoulementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanDeRoulementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanDeRoulementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
