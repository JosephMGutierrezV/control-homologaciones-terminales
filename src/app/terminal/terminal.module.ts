import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalesComponent } from './pages/terminales/terminales.component';
import { MatButtonModule } from '@angular/material/button';
import { TerminalConsultaComponent } from './components/terminal-consulta/terminal-consulta.component';
import { TerminalRoutingModule } from './terminal-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TerminalIngresoComponent } from './components/terminal-ingreso/terminal-ingreso.component';
import { TerminalNuevoComponent } from './components/terminal-nuevo/terminal-nuevo.component';
import { TerminalPendientesComponent } from './components/terminal-pendientes/terminal-pendientes.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    TerminalesComponent,
    TerminalConsultaComponent,
    TerminalIngresoComponent,
    TerminalNuevoComponent,
    TerminalPendientesComponent,
    InicioComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    TerminalRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  exports: [TerminalesComponent],
})
export class TerminalModule {}
