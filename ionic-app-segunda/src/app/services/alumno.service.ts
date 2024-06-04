import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Alumno {
  nombre: string;
  matricula: string;
  calificacion: string;
  direccion: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private alumnos: Alumno[] = [];
  private alumnosSubject: BehaviorSubject<Alumno[]> = new BehaviorSubject(this.alumnos);

  constructor() {}

  agregarAlumno(alumno: Alumno) {
    this.alumnos.push(alumno);
    this.alumnosSubject.next(this.alumnos);
  }

  obtenerAlumnos(): Observable<Alumno[]> {
    return this.alumnosSubject.asObservable();
  }

  eliminarAlumno(matricula: string) {
    this.alumnos = this.alumnos.filter(alumno => alumno.matricula !== matricula);
    this.alumnosSubject.next(this.alumnos);
  }
}
