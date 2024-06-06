import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeLogistiqueComponent } from './equipe-logistique.component';

describe('EquipeLogistiqueComponent', () => {
  let component: EquipeLogistiqueComponent;
  let fixture: ComponentFixture<EquipeLogistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipeLogistiqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipeLogistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
