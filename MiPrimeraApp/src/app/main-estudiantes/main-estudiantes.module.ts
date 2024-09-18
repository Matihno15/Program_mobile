import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainEstudiantesPageRoutingModule } from './main-estudiantes-routing.module';

import { MainEstudiantesPage } from './main-estudiantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainEstudiantesPageRoutingModule
  ],
  declarations: [MainEstudiantesPage]
})
export class MainEstudiantesPageModule {}
