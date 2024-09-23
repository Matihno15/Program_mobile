import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainProfePageRoutingModule } from './main-profe-routing.module';

import { MainProfePage } from './main-profe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainProfePageRoutingModule
  ],
  declarations: [MainProfePage]
})
export class MainProfePageModule {}
