import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDeTraficComponent } from './type-de-trafic.component';

describe('TypeDeTraficComponent', () => {
  let component: TypeDeTraficComponent;
  let fixture: ComponentFixture<TypeDeTraficComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypeDeTraficComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeDeTraficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
