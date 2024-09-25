import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private navCrtl: NavController,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onLogin() {
    const { username, password } = this.loginForm.value;

    if (username === 'Usuario1' && password === 'MiClav3') {
      this.navCrtl.navigateRoot('/main-estudiantes');
    } else if (username === 'Profe' && password === 'Patito') {
      this.navCrtl.navigateRoot('/main-profe');
    } else {
      alert('Credenciales incorrectas, inténtelo nuevamente');
    }
  }

  navigateToRecoverPassword() {
    this.router.navigate(['/recuperar-contrasena']);
  }
}
