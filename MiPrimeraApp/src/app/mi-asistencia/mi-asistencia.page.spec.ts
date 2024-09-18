import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiAsistenciaPage } from './mi-asistencia.page';

describe('MiAsistenciaPage', () => {
  let component: MiAsistenciaPage;
  let fixture: ComponentFixture<MiAsistenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MiAsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
