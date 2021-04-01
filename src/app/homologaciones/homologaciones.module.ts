import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomologacionesRoutingModule } from './homologaciones-routing.module';
import { HomologacionesComponent } from './pages/homologaciones/homologaciones.component';
import { MatButtonModule } from '@angular/material/button';
import { HomologacionesConsultasComponent } from './components/homologaciones-consultas/homologaciones-consultas.component';
import { HomologacionesGraficasComponent } from './components/homologaciones-graficas/homologaciones-graficas.component';

@NgModule({
  declarations: [HomologacionesComponent, HomologacionesConsultasComponent, HomologacionesGraficasComponent],
  imports: [CommonModule, HomologacionesRoutingModule, MatButtonModule],
  exports: [HomologacionesRoutingModule],
})
export class HomologacionesModule {}
