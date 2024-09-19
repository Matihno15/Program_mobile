import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-asignaturas',
  templateUrl: './mis-asignaturas.page.html',
  styleUrls: ['./mis-asignaturas.page.scss'],
})
export class MisAsignaturasPage {
  asignaturas = [
    {
      nombre: 'Matemáticas',
      profesor: 'Juan Pérez',
      horario: '08:00 - 09:00',
      sala: 'A-101',
    },
    {
      nombre: 'Historia',
      profesor: 'María González',
      horario: '09:00 - 10:00',
      sala: 'B-102',
    },
    {
      nombre: 'Ciencias',
      profesor: 'Pedro Rodríguez',
      horario: '10:00 - 11:00',
      sala: 'C-103',
    },
  ];
}

