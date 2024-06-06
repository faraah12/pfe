import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementFamilleComponent } from './equipement-famille.component';

describe('EquipementFamilleComponent', () => {
  let component: EquipementFamilleComponent;
  let fixture: ComponentFixture<EquipementFamilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipementFamilleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipementFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
