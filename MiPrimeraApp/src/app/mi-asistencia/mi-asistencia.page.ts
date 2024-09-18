import { Component } from '@angular/core';

interface Asistencia {
  asignatura: string;
  fecha: string;
  presente: boolean;
}

@Component({
  selector: 'app-mi-asistencia',
  templateUrl: './mi-asistencia.page.html',
  styleUrls: ['./mi-asistencia.page.scss'],
})
export class MiAsistenciaPage {
  asistencias: Asistencia[] = [
    { asignatura: 'Matemáticas', fecha: '2023-10-01', presente: true },
    { asignatura: 'Historia', fecha: '2023-10-02', presente: false },
    { asignatura: 'Ciencias', fecha: '2023-10-03', presente: true },
  ];

  constructor() {}
}