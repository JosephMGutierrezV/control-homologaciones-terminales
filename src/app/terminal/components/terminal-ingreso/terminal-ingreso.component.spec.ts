import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalIngresoComponent } from './terminal-ingreso.component';

describe('TerminalIngresoComponent', () => {
  let component: TerminalIngresoComponent;
  let fixture: ComponentFixture<TerminalIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalIngresoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
