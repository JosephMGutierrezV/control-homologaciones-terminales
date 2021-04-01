import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomologacionesComponent } from './pages/homologaciones/homologaciones.component';
import { HomologacionesConsultasComponent } from './components/homologaciones-consultas/homologaciones-consultas.component';
import { HomologacionesGraficasComponent } from './components/homologaciones-graficas/homologaciones-graficas.component';

const routes: Routes = [
  {
    path: '',
    component: HomologacionesComponent,
    children: [
      { path: 'consultar', component: HomologacionesConsultasComponent },
      { path: 'graficar', component: HomologacionesGraficasComponent },
      { path: '**', redirectTo: '/homologaciones/consultar' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomologacionesRoutingModule {}
