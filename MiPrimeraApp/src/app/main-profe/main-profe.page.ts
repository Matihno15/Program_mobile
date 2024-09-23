import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-profe',
  templateUrl: './main-profe.page.html',
  styleUrls: ['./main-profe.page.scss'],
})
export class MainProfePage {
  SwQr = false;

  constructor(private router: Router) {}

  mostrarQr() {
    this.SwQr = !this.SwQr;
  }

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }

  logout() {
    this.router.navigate(['/login'], {replaceUrl: true});
  }
}
