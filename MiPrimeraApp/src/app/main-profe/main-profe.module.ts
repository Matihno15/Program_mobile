import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MainProfesorPageRoutingModule } from './main-profe-routing.module';
import { MainProfesorPage } from './main-profe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainProfesorPageRoutingModule
  ],
  declarations: [MainProfesorPage]
})
export class MainProfesorPageModule { }