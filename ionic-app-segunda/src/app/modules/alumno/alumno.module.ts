import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlumnoFormularioComponent } from '../../alumno-formulario/alumno-formulario.component';

@NgModule({
  declarations: [AlumnoFormularioComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ],
  exports: [AlumnoFormularioComponent]
})
export class AlumnoModule {}
