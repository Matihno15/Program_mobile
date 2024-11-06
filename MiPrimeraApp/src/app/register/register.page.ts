import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const newUser = this.registerForm.value;

    // Obtener la lista de usuarios existentes
    this.http.get<any[]>('http://localhost:3000/users')
      .subscribe(users => {
        // Encontrar el ID más alto
        const maxId = users.reduce((max, user) => user.id > max ? user.id : max, 0);
        // Asignar el nuevo ID como el siguiente número en la secuencia
        newUser.id = maxId + 1;

        // Registrar el nuevo usuario
        this.http.post('http://localhost:3000/users', newUser)
          .subscribe(response => {
            alert('Usuario registrado con éxito');
            this.router.navigate(['/login']);
          }, error => {
            alert('Error al registrar el usuario');
            console.error('Error al registrar el usuario:', error);
          });
      }, error => {
        alert('Error al obtener la lista de usuarios');
        console.error('Error al obtener la lista de usuarios:', error);
      });
  }
}