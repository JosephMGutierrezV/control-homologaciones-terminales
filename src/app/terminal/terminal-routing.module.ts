import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerminalConsultaComponent } from './components/terminal-consulta/terminal-consulta.component';
import { TerminalesComponent } from './pages/terminales/terminales.component';
import { TerminalIngresoComponent } from './components/terminal-ingreso/terminal-ingreso.component';
import { TerminalNuevoComponent } from './components/terminal-nuevo/terminal-nuevo.component';
import { TerminalPendientesComponent } from './components/terminal-pendientes/terminal-pendientes.component';

const routes: Routes = [
  {
    path: '',
    component: TerminalesComponent,
    children: [
      {
        path: 'consultar',
        component: TerminalConsultaComponent,
      },
      {
        path: 'ingreso',
        component: TerminalIngresoComponent,
      },
      {
        path: 'nuevo',
        component: TerminalNuevoComponent,
      },
      {
        path: 'pendientes',
        component: TerminalPendientesComponent,
      },
      { path: '**', redirectTo: '/terminales/consultar' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerminalRoutingModule {}
