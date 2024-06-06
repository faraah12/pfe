import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeMarineComponent } from './equipe-marine.component';

describe('EquipeMarineComponent', () => {
  let component: EquipeMarineComponent;
  let fixture: ComponentFixture<EquipeMarineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipeMarineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipeMarineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
