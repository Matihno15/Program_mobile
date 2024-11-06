import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-asistencia',
  templateUrl: './registrar-asistencia.page.html',
  styleUrls: ['./registrar-asistencia.page.scss'],
})
export class RegistrarAsistenciaPage {
  attendanceForm: FormGroup;
  qrScanned: boolean = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.attendanceForm = this.fb.group({
      className: ['', Validators.required],
      subject: ['', Validators.required],
      date: [{ value: '', disabled: true }, Validators.required]
    });
  }

  handleQrCodeResult(result: string) {
    try {
      const qrData = JSON.parse(result);
      const currentDate = new Date().toISOString().split('T')[0]; // Obtener la fecha actual en formato YYYY-MM-DD
      this.attendanceForm.patchValue({
        className: qrData.className,
        subject: qrData.subject,
        date: currentDate
      });
      this.qrScanned = true;
    } catch (error) {
      console.error('Error parsing QR code:', error);
      alert('Código QR inválido');
    }
  }

  onSubmit() {
    if (!this.qrScanned) {
      alert('Debe escanear el código QR para registrar la asistencia');
      return;
    }

    const newAttendance = this.attendanceForm.getRawValue(); // Obtener los valores del formulario, incluyendo los campos deshabilitados
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') ?? '{}');

    if (loggedInUser && loggedInUser.id) {
      newAttendance.userId = loggedInUser.id;

      // Obtener la lista de asignaturas existentes
      this.http.get<any[]>('http://localhost:3000/asignaturas')
        .subscribe(asignaturas => {
          // Encontrar el ID más alto
          const maxId = asignaturas.reduce((max, asignatura) => asignatura.id > max ? asignatura.id : max, 0);
          // Asignar el nuevo ID como el siguiente número en la secuencia
          newAttendance.id = maxId + 1;

          // Registrar la nueva asignatura
          this.http.post('http://localhost:3000/asignaturas', newAttendance)
            .subscribe(response => {
              alert('Asistencia registrada con éxito');
              this.router.navigate(['/main-estudiantes']);
            }, error => {
              alert('Error al registrar la asistencia');
              console.error('Error al registrar la asistencia:', error);
            });
        }, error => {
          alert('Error al obtener la lista de asignaturas');
          console.error('Error al obtener la lista de asignaturas:', error);
        });
    } else {
      alert('Usuario no autenticado');
      this.router.navigate(['/login']);
    }
  }
}