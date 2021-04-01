import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomologacionesComponent } from './homologaciones.component';

describe('HomologacionesComponent', () => {
  let component: HomologacionesComponent;
  let fixture: ComponentFixture<HomologacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomologacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomologacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
