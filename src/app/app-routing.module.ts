import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './terminal/pages/inicio/inicio.component';
import { SimModule } from './sim/sim.module';

const routes: Routes = [
  { path: '', component: InicioComponent },
  {
    path: 'terminales',
    loadChildren: () =>
      import('./terminal/terminal.module').then((m) => m.TerminalModule),
  },
  {
    path: 'homologaciones',
    loadChildren: () =>
      import('./homologaciones/homologaciones.module').then(
        (m) => m.HomologacionesModule
      ),
  },
  {
    path: 'sim-card',
    loadChildren: () => import('./sim/sim.module').then((m) => m.SimModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
