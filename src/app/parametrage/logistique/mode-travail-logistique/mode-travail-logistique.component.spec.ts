import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeTravailLogistiqueComponent } from './mode-travail-logistique.component';

describe('ModeTravailLogistiqueComponent', () => {
  let component: ModeTravailLogistiqueComponent;
  let fixture: ComponentFixture<ModeTravailLogistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModeTravailLogistiqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModeTravailLogistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
