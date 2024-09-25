import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private alertController: AlertController) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, this.domainValidator]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  domainValidator(control: any) {
    const email = control.value;
    const domainRegex = /^[a-zA-Z0-9._%+-]+@(duocuc\.cl|profesor\.duoc\.cl)$/;
    return domainRegex.test(email) ? null : { invalidDomain: true };
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Registro Completo',
      message: 'Su registro ha sido completado con éxito.',
      buttons: ['OK']
    });
    await alert.present();
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.presentAlert();
    }
  }
}
