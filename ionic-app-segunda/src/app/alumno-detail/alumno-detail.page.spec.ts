import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnoDetailPage } from './alumno-detail.page';

describe('AlumnoDetailPage', () => {
  let component: AlumnoDetailPage;
  let fixture: ComponentFixture<AlumnoDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
