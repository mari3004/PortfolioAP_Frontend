import { Component, OnInit } from '@angular/core';
import { Educacion } from './educacion';
import { EducacionService } from './educacion.service';
import { Experiencia } from './experiencia';
import { ExperienciaService } from './experiencia.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  miPorfolio:any;
  escuela: Educacion[];
  laboral: Experiencia[];

  constructor(private educacionService:EducacionService,
    private experienciaService:ExperienciaService,
    private router: Router) { }

  ngOnInit(): void {
    this.experienciaService.getExperiencia().subscribe(
      laboral => this.laboral = laboral);

    this.educacionService.getEducacion().subscribe(
      escuela => this.escuela = escuela);
  }

  public deleteedu(escuela: Educacion): void {
    Swal.fire({
      title: `¿Estas seguro de eliminar ${escuela.titulo}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.educacionService.delete(escuela.id).subscribe(
          _response => {
            this.router.navigate(['/inicio']),
            Swal.fire('La educacion ha sido eliminada!', '', 'success'),
            window.location.reload()
        }
        )
      }
    })
  }

  public deleteexp(laboral: Experiencia): void {
    Swal.fire({
      title: `¿Estas seguro de eliminar ${laboral.empresa}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.experienciaService.delete(laboral.id).subscribe(
          _response => {
            this.laboral = this.laboral.filter(exp => exp !== laboral)
            Swal.fire('La experiencia ha sido eliminada!', '', 'success'),
            this.router.navigate(['/inicio'])
        }
        )
      }
    })
  }



}
