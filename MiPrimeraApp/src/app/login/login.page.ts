import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    const { username, password } = this.loginForm.value;

    // Verificar si el usuario es un estudiante
    this.http.get<any[]>(`http://localhost:3000/users?username=${username}&password=${password}`)
      .subscribe(users => {
        if (users.length > 0) {
          const user = users[0];
          localStorage.setItem('loggedInUser', JSON.stringify(user));
          this.router.navigate(['/main-estudiantes']);
        } else {
          // Verificar si el usuario es un profesor
          this.http.get<any[]>(`http://localhost:3000/profesores?username=${username}&password=${password}`)
            .subscribe(profesores => {
              if (profesores.length > 0) {
                const profesor = profesores[0];
                localStorage.setItem('loggedInUser', JSON.stringify(profesor));
                this.router.navigate(['/main-profesor']);
              } else {
                alert('Usuario o contraseña incorrectos');
              }
            });
        }
      });
  }
}