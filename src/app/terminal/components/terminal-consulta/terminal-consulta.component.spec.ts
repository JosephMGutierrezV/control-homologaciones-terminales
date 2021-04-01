import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalConsultaComponent } from './terminal-consulta.component';

describe('TerminalConsultaComponent', () => {
  let component: TerminalConsultaComponent;
  let fixture: ComponentFixture<TerminalConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
