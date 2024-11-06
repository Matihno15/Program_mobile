import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.page.html',
  styleUrls: ['./cambiar-clave.page.scss'],
})
export class CambiarClavePage {
  currentPassword: string = '';
  newPassword: string = '';
  showCurrentPassword: boolean = false;
  showNewPassword: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  toggleShowCurrentPassword() {
    this.showCurrentPassword = !this.showCurrentPassword;
  }

  toggleShowNewPassword() {
    this.showNewPassword = !this.showNewPassword;
  }

  onSubmit() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') ?? '{}');
    if (loggedInUser && loggedInUser.password === this.currentPassword) {
      const updatedUser = { ...loggedInUser, password: this.newPassword };
      this.http.put(`http://localhost:3000/users/${loggedInUser.id}`, updatedUser)
        .subscribe(response => {
          localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
          alert('Contraseña actualizada con éxito');
          this.router.navigate(['/main-estudiantes']);
        }, error => {
          alert('Error al actualizar la contraseña');
          console.error('Error al actualizar la contraseña:', error);
        });
    } else {
      alert('La contraseña actual es incorrecta');
    }
  }
}