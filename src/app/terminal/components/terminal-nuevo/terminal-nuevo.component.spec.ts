import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalNuevoComponent } from './terminal-nuevo.component';

describe('TerminalNuevoComponent', () => {
  let component: TerminalNuevoComponent;
  let fixture: ComponentFixture<TerminalNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
