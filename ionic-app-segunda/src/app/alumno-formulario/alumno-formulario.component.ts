import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlumnoService } from '../services/alumno.service';

@Component({
  selector: 'app-alumno-formulario',
  templateUrl: './alumno-formulario.component.html',
  styleUrls: ['./alumno-formulario.component.scss'],
})
export class AlumnoFormularioComponent {
  alumnoForm: FormGroup;

  constructor(private fb: FormBuilder, private alumnoService: AlumnoService) {
    this.alumnoForm = this.fb.group({
      nombre: ['', Validators.required],
      matricula: ['', Validators.required],
      calificacion: ['', Validators.required],
      direccion: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.alumnoForm.valid) {
      this.alumnoService.agregarAlumno(this.alumnoForm.value);
      this.alumnoForm.reset();
    }
  }
}
