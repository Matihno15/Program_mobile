import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mi-asistencia',
  templateUrl: './mi-asistencia.page.html',
  styleUrls: ['./mi-asistencia.page.scss'],
})
export class MiAsistenciaPage implements OnInit {
  asistencias: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadAsistencias();
  }

  loadAsistencias() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') ?? '{}');
    if (loggedInUser && loggedInUser.id) {
      this.http.get<any[]>(`http://localhost:3000/asignaturas?userId=${loggedInUser.id}`)
        .subscribe(asistencias => {
          this.asistencias = asistencias;
        }, error => {
          console.error('Error al cargar las asistencias:', error);
        });
    }
  }
}