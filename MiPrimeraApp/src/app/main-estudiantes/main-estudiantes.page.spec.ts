import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainEstudiantesPage } from './main-estudiantes.page';

describe('MainEstudiantesPage', () => {
  let component: MainEstudiantesPage;
  let fixture: ComponentFixture<MainEstudiantesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MainEstudiantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
