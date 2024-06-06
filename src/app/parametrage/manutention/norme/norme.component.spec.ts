import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormeComponent } from './norme.component';

describe('NormeComponent', () => {
  let component: NormeComponent;
  let fixture: ComponentFixture<NormeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NormeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NormeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
