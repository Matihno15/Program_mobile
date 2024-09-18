import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private navCrtl: NavController
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit() {}
  
  onLogin(){
    const {username, password} = this.loginForm.value;

    if (username === 'Usuario1' && password === 'MiClav3'){
      this.navCrtl.navigateRoot('/home');
<<<<<<< HEAD
    }
    else if (username === 'Profe' && password === 'Patito'){
      this.navCrtl.navigateRoot('/home')
    }else {
      alert('Credenciales incorrectas, intentelo nuevamente');
    }
    
=======
    }else {
      alert('Credenciales incorrectas, intentelo nuevamente');
    }
>>>>>>> 44584af7b023624ca24f417668d4b7affa1f21e1
  }
}
