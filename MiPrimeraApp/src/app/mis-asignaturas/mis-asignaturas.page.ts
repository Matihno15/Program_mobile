import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-asignaturas',
  templateUrl: './mis-asignaturas.page.html',
  styleUrls: ['./mis-asignaturas.page.scss'],
})
export class MisAsignaturasPage implements OnInit {
  asignaturas = [
    {
      nombre: 'Programacion movil',
      profesor: 'Patricio_Yañez',
      horario: '08:00 - 09:00',
      sala: 'A-101',
    },
    {
      nombre: 'Base de datos',
      profesor: 'Fabian Carvacho',
      horario: '09:00 - 10:00',
      sala: 'B-102',
    },
    {
      nombre: 'Ingenieria de software',
      profesor: 'Pedro Rodríguez',
      horario: '10:00 - 11:00',
      sala: 'C-103',
    },
  ];

  constructor() {}

  ngOnInit() {}

  onButtonClick(asignatura: any) {
    console.log('Asignatura seleccionada:', asignatura);
    // Aquí puedes agregar la lógica que deseas ejecutar cuando el botón sea clicado
  }
}