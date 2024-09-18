import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MiAsistenciaPageRoutingModule } from './mi-asistencia-routing.module';
import { MiAsistenciaPage } from './mi-asistencia.page'; // Asegúrate de que el nombre coincida

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiAsistenciaPageRoutingModule
  ],
  declarations: [MiAsistenciaPage]
})
export class MiAsistenciaPageModule {}