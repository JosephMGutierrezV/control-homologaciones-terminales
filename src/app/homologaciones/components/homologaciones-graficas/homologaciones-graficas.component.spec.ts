import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomologacionesGraficasComponent } from './homologaciones-graficas.component';

describe('HomologacionesGraficasComponent', () => {
  let component: HomologacionesGraficasComponent;
  let fixture: ComponentFixture<HomologacionesGraficasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomologacionesGraficasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomologacionesGraficasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
