import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from './experiencia';
import { ExperienciaService } from './experiencia.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-formexperience',
  templateUrl: './formexperience.component.html',
  styleUrls: ['./formexperience.component.css']
})
export class FormexperienceComponent implements OnInit {

  public experiencia: Experiencia = new Experiencia();
  public titulo: string= "Actualizar Experiencia"

  constructor(private experienciaService: ExperienciaService, 
    private router: Router) { }

  ngOnInit() {
  }
  public updateexp(): void {
      this.experienciaService.edit(this.experiencia).subscribe(
        _response => this.router.navigate(['/informacion'])
      )
    }
    public newexp(): void {
      this.experienciaService.create(this.experiencia).subscribe(
        _response => {
          this.router.navigate(['/informacion'])
          swal.fire('Experiencia creada correctamente', 'success')
        });
    }  

}
