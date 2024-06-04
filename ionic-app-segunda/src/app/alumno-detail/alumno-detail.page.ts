import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from '../services/alumno.service';

@Component({
  selector: 'app-alumno-detail',
  templateUrl: './alumno-detail.page.html',
  styleUrls: ['./alumno-detail.page.scss'],
})
export class AlumnoDetailPage implements OnInit {
  alumno: any;

  constructor(
    private route: ActivatedRoute,
    private alumnoService: AlumnoService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.alumnoService.obtenerAlumnos().subscribe((alumnos) => {
      this.alumno = alumnos.find((a) => a.matricula === id);
    });
  }

  volver() {
    this.router.navigate(['/']);
  }
}
