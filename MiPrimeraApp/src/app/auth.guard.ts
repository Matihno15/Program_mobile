import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'  // Esto hace que el guard esté disponible en toda la aplicación
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
      // Si el usuario está autenticado, permite el acceso
      return true;
    } else {
      // Si no está autenticado, redirige a la página de login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
