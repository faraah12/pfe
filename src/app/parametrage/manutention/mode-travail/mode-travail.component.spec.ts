import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeTravailComponent } from './mode-travail.component';

describe('ModeTravailComponent', () => {
  let component: ModeTravailComponent;
  let fixture: ComponentFixture<ModeTravailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModeTravailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModeTravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
