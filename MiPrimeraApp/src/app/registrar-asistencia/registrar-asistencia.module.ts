import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { RegistrarAsistenciaPageRoutingModule } from './registrar-asistencia-routing.module';
import { RegistrarAsistenciaPage } from './registrar-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ZXingScannerModule,
    RegistrarAsistenciaPageRoutingModule
  ],
  declarations: [RegistrarAsistenciaPage]
})
export class RegistrarAsistenciaPageModule { }