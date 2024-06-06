import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeTheoriqueComponent } from './mode-theorique.component';

describe('ModeTheoriqueComponent', () => {
  let component: ModeTheoriqueComponent;
  let fixture: ComponentFixture<ModeTheoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModeTheoriqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModeTheoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
