import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-estudiantes',
    pathMatch: 'full'
  },
  {
    path: 'main-estudiantes',
    loadChildren: () => import('./main-estudiantes/main-estudiantes.module').then(m => m.MainEstudiantesPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'cambiar-clave',
    loadChildren: () => import('./cambiar-clave/cambiar-clave.module').then(m => m.CambiarClavePageModule)
  },
  {
    path: 'registrar-asistencia',
    loadChildren: () => import('./registrar-asistencia/registrar-asistencia.module').then(m => m.RegistrarAsistenciaPageModule)
  },
  {
    path: 'main-profesor',
    loadChildren: () => import('./main-profe/main-profe.module').then(m => m.MainProfesorPageModule)
  },
  {
    path: 'mis-asignaturas',
    loadChildren: () => import('./mis-asignaturas/mis-asignaturas.module').then(m => m.MisAsignaturasPageModule)
  },
  {
    path: 'mi-asistencia',
    loadChildren: () => import('./mi-asistencia/mi-asistencia.module').then(m => m.MiAsistenciaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }