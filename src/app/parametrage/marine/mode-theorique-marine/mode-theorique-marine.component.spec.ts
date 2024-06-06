import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeTheoriqueMarineComponent } from './mode-theorique-marine.component';

describe('ModeTheoriqueMarineComponent', () => {
  let component: ModeTheoriqueMarineComponent;
  let fixture: ComponentFixture<ModeTheoriqueMarineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModeTheoriqueMarineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModeTheoriqueMarineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
