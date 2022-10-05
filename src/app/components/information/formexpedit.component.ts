import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from './experiencia';
import { ExperienciaService } from './experiencia.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-formexpedit',
  templateUrl: './formexpedit.component.html',
  styleUrls: ['./formexpedit.component.css']
})
export class FormexpeditComponent implements OnInit {

  public experiencia: Experiencia = new Experiencia();
  public titulo: string= "Actualizar Experiencia";
  public id: number | null;

  constructor(private experienciaService: ExperienciaService, 
    private router: Router,
    private aRouter: ActivatedRoute) { }

    ngOnInit() {
      this.cargarExp();
    }
  
    cargarExp(): void {
      this.aRouter.params.subscribe(params => {
        let id = params ['id']
        if (id){
          this.experienciaService.getExperienciaid(id).subscribe(
            _experiencia => this.experiencia = _experiencia)
        }
      })
    }

  public updateexp(): void {
      this.experienciaService.edit(this.id, this.experiencia).subscribe(
        _experiencia => {
        Swal.fire('Experiencia actualizada', '', 'success'),
        
        this.router.navigate(['/informacion'])
        })
    }

}
