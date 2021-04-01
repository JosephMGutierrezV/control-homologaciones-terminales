import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimRoutingModule } from './sim-routing.module';
import { SimComponent } from './pages/sim/sim.component';
import { MatButtonModule } from '@angular/material/button';
import { SimConsultaComponent } from './components/sim-consulta/sim-consulta.component';
import { SimIngresoComponent } from './components/sim-ingreso/sim-ingreso.component';

@NgModule({
  declarations: [SimComponent, SimConsultaComponent, SimIngresoComponent],
  imports: [CommonModule, SimRoutingModule, MatButtonModule],
})
export class SimModule {}
