import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-estudiantes',
  templateUrl: './main-estudiantes.page.html',
  styleUrls: ['./main-estudiantes.page.scss'],
})
export class MainEstudiantesPage implements OnInit {
  nombreUsuario: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') ?? '{}');
    if (loggedInUser) {
      this.nombreUsuario = loggedInUser.name;
    } else {
      this.router.navigate(['/login']);
    }
  }

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login'], { replaceUrl: true });  // <--- Cambio aquí
  }

  goBack() {
    this.router.navigate(['/main-estudiantes']);
  }
}
