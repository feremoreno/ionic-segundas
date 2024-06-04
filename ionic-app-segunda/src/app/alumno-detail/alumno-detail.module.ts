import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnoDetailPageRoutingModule } from './alumno-detail-routing.module';

import { AlumnoDetailPage } from './alumno-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoDetailPageRoutingModule
  ],
  declarations: [AlumnoDetailPage]
})
export class AlumnoDetailPageModule {}
