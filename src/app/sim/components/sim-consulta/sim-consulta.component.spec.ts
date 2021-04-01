import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimConsultaComponent } from './sim-consulta.component';

describe('SimConsultaComponent', () => {
  let component: SimConsultaComponent;
  let fixture: ComponentFixture<SimConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
