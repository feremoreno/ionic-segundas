import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { AlumnoModule } from '../modules/alumno/alumno.module';  // Importa el módulo de alumnos

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AlumnoModule  // Añade el módulo de alumnos aquí
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
