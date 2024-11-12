import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-profesor',
  templateUrl: './main-profe.page.html',
  styleUrls: ['./main-profe.page.scss'],
})
export class MainProfesorPage implements OnInit {
  SwQr: boolean = false;
  asistencias: any[] = [];
  users: any[] = [];
  isModalOpen = false;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.loadUsers();
  }

  mostrarQr() {
    this.SwQr = !this.SwQr;
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }

  loadUsers() {
    this.http.get<any[]>('http://localhost:3000/users')
      .subscribe(users => {
        this.users = users;
        this.loadAsistencias(); // Load asistencias after users are loaded
      }, error => {
        console.error('Error al cargar los usuarios:', error);
      });
  }

  loadAsistencias() {
    this.http.get<any[]>('http://localhost:3000/asignaturas')
      .subscribe(asistencias => {
        this.asistencias = asistencias.map(asistencia => {
          return {
            ...asistencia,
            studentName: this.getStudentName(asistencia.userId)
          };
        });
      }, error => {
        console.error('Error al cargar las asistencias:', error);
      });
  }

  getStudentName(userId: number): string {
    const user = this.users.find(user => user.id === userId);
    return user ? user.name : 'Desconocido';
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}