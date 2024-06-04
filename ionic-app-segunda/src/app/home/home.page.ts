import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../services/alumno.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  alumnos$!: Observable<any[]>;

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit() {
    this.alumnos$ = this.alumnoService.obtenerAlumnos();
  }

  eliminarAlumno(matricula: string) {
    this.alumnoService.eliminarAlumno(matricula);
  }
}
