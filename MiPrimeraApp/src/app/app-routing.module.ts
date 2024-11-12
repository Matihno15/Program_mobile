import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';  // Ajusta según tu estructura

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'main-estudiantes',
    loadChildren: () => import('./main-estudiantes/main-estudiantes.module').then(m => m.MainEstudiantesPageModule),
    canActivate: [AuthGuard]  // Aplica el guard para proteger esta ruta
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
    loadChildren: () => import('./cambiar-clave/cambiar-clave.module').then(m => m.CambiarClavePageModule),
    canActivate: [AuthGuard]  // Protege esta ruta también
  },
  {
    path: 'registrar-asistencia',
    loadChildren: () => import('./registrar-asistencia/registrar-asistencia.module').then(m => m.RegistrarAsistenciaPageModule),
    canActivate: [AuthGuard]  // Protege esta ruta
  },
  {
    path: 'main-profesor',
    loadChildren: () => import('./main-profe/main-profe.module').then(m => m.MainProfesorPageModule),
    canActivate: [AuthGuard]  // Protege esta ruta
  },
  {
    path: 'mis-asignaturas',
    loadChildren: () => import('./mis-asignaturas/mis-asignaturas.module').then(m => m.MisAsignaturasPageModule),
    canActivate: [AuthGuard]  // Protege esta ruta
  },
  {
    path: 'mi-asistencia',
    loadChildren: () => import('./mi-asistencia/mi-asistencia.module').then(m => m.MiAsistenciaPageModule),
    canActivate: [AuthGuard]  // Protege esta ruta
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
