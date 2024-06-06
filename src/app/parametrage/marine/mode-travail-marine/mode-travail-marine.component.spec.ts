import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeTravailMarineComponent } from './mode-travail-marine.component';

describe('ModeTravailMarineComponent', () => {
  let component: ModeTravailMarineComponent;
  let fixture: ComponentFixture<ModeTravailMarineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModeTravailMarineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModeTravailMarineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
