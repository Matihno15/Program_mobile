import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainProfesorPage } from './main-profe.page';

const routes: Routes = [
  {
    path: '',
    component: MainProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainProfesorPageRoutingModule { }