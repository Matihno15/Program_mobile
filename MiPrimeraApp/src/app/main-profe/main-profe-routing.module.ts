import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainProfePage } from './main-profe.page';

const routes: Routes = [
  {
    path: '',
    component: MainProfePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainProfePageRoutingModule {}
