import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimComponent } from './pages/sim/sim.component';
import { SimConsultaComponent } from './components/sim-consulta/sim-consulta.component';
import { SimIngresoComponent } from './components/sim-ingreso/sim-ingreso.component';

const routes: Routes = [
  {
    path: '',
    component: SimComponent,
    children: [
      { path: 'consultar', component: SimConsultaComponent },
      { path: 'ingresar', component: SimIngresoComponent },
      { path: '**', redirectTo: '/sim-card/consultar' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimRoutingModule {}
