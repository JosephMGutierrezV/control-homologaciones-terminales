import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalPendientesComponent } from './terminal-pendientes.component';

describe('TerminalPendientesComponent', () => {
  let component: TerminalPendientesComponent;
  let fixture: ComponentFixture<TerminalPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalPendientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
