import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimIngresoComponent } from './sim-ingreso.component';

describe('SimIngresoComponent', () => {
  let component: SimIngresoComponent;
  let fixture: ComponentFixture<SimIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimIngresoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
