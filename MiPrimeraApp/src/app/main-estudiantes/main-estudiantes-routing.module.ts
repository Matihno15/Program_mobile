import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainEstudiantesPage } from './main-estudiantes.page';

const routes: Routes = [
  {
    path: '',
    component: MainEstudiantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainEstudiantesPageRoutingModule {}
