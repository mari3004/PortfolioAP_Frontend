import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../services/porfolio.service';
import { Educacion } from './educacion';
import { EducacionService } from './educacion.service';
import { Experiencia } from './experiencia';
import { ExperienciaService } from './experiencia.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  miPorfolio:any;
  escuela: Educacion[];
  laboral: Experiencia[];

  constructor(private datosPorfolio:PorfolioService,
    private educacionService:EducacionService,
    private experienciaService:ExperienciaService) { }

  ngOnInit(): void {
    this.experienciaService.getExperiencia().subscribe(
      laboral => this.laboral = laboral);

    this.educacionService.getEducacion().subscribe(
      escuela => this.escuela = escuela);
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPorfolio=data;
    });
  }

  public deleteedu(escuela: Educacion): void {
    swal.fire({
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
            this.escuela = this.escuela.filter(esc => esc !== escuela)
            swal.fire(
              'La educacion ha sido eliminada',
              'success'
        )}
        )
      }
    })
  }

  public deleteexp(laboral: Experiencia): void {
    swal.fire({
      title: `¿Estas seguro de eliminar ${laboral.empresa}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.educacionService.delete(laboral.id).subscribe(
          _response => {
            this.laboral = this.laboral.filter(exp => exp !== laboral)
            swal.fire(
              'La experiencia ha sido eliminada',
              'success'
        )}
        )
      }
    })
  }



}
