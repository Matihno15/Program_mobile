import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import QrScanner from 'qr-scanner';

@Component({
  selector: 'app-registrar-asistencia',
  templateUrl: './registrar-asistencia.page.html',
  styleUrls: ['./registrar-asistencia.page.scss'],
})
export class RegistrarAsistenciaPage {

  constructor() {}

  async escanear() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl
      });
  
      if (image && image.dataUrl) {
        const img = new Image();
        img.src = image.dataUrl;

        QrScanner.scanImage(img).then(result => {
          console.log('Código QR detectado:', result);
        }).catch(error => {
          console.error('No se encontró ningún código QR:', error);
        });
      } else {
        console.error('No se pudo obtener la imagen');
      }
    } catch (error) {
      console.error('Error al abrir la cámara o al escanear:', error);
    }
  }
  
}
