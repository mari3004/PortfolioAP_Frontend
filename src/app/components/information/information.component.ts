import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../services/porfolio.service';
import { Educacion } from './educacion';
import { EducacionService } from './educacion.service';
import { Experiencia } from './experiencia';
import { ExperienciaService } from './experiencia.service';

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
    editedu(educacion: Educacion): void{
    }
    editexp(experiencia: Experiencia): void{
    }


}
