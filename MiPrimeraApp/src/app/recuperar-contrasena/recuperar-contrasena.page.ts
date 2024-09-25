import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage {

  recuperarContrasenaForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private alertController: AlertController) {
    this.recuperarContrasenaForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, this.domainValidator]]
    });
  }

  domainValidator(control: any) {
    const email = control.value;
    const domainRegex = /^[a-zA-Z0-9._%+-]+@(duocuc\.cl|profesor\.duoc\.cl)$/;
    return domainRegex.test(email) ? null : { invalidDomain: true };
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Recuperación de Contraseña',
      message: 'Se ha enviado el correo con el link de recuperación.',
      buttons: ['OK']
    });
    await alert.present();
  }

  onSubmit() {
    if (this.recuperarContrasenaForm.valid) {
      this.presentAlert();
    }
  }
}
