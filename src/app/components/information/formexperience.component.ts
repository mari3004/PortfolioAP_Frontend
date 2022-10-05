import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from './experiencia';
import { ExperienciaService } from './experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formexperience',
  templateUrl: './formexperience.component.html',
  styleUrls: ['./formexperience.component.css']
})
export class FormexperienceComponent implements OnInit {

  public experiencia: Experiencia = new Experiencia();
  public titulo: string= "Crear Experiencia"

  constructor(private experienciaService: ExperienciaService, 
    private router: Router) { }

  ngOnInit() {
  }
    public newexp(): void {
      this.experienciaService.create(this.experiencia).subscribe(
        _response => {
        Swal.fire('Experiencia creada correctamente', '', 'success')
        });
        this.router.navigate(['/informacion'])
    }  

}