import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.page.html',
  styleUrls: ['./cambiar-clave.page.scss'],
})
export class CambiarClavePage implements OnInit {
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  showCurrentPassword: boolean = false;
  showNewPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() { }

  onSubmit() {
    if (this.currentPassword !== 'MiClav3') {
      alert('La contraseña actual es incorrecta.');
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      alert('Las nuevas contraseñas no coinciden.');
      return;
    }

    this.CambiarContra(this.currentPassword, this.newPassword);
  }

  CambiarContra(currentPassword: string, newPassword: string) {
    // Simulación del cambio de contraseña
    console.log('Contraseña actual:', currentPassword);
    console.log('Nueva contraseña:', newPassword);

    // Mostrar mensaje de éxito
    alert('Contraseña cambiada exitosamente.');
  }

  MostrarcontraActual() {
    this.showCurrentPassword = !this.showCurrentPassword;
  }

  Mostrarcontranueva() {
    this.showNewPassword = !this.showNewPassword;
  }

  Mostrarconfirmarcontra() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  VolverMenuEst() {
    this.router.navigate(['/main-estudiantes']);
  }
}