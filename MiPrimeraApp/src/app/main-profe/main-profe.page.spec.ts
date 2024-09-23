import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainProfePage } from './main-profe.page';

describe('MainProfePage', () => {
  let component: MainProfePage;
  let fixture: ComponentFixture<MainProfePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MainProfePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
