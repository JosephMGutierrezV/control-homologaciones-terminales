import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomologacionesConsultasComponent } from './homologaciones-consultas.component';

describe('HomologacionesConsultasComponent', () => {
  let component: HomologacionesConsultasComponent;
  let fixture: ComponentFixture<HomologacionesConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomologacionesConsultasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomologacionesConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
