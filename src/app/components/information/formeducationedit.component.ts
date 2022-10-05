import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from './educacion';
import { EducacionService } from './educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formeducationedit',
  templateUrl: './formeducationedit.component.html',
  styleUrls: ['./formeducationedit.component.css']
})
export class FormeducationeditComponent implements OnInit {

  public educacion: Educacion = new Educacion();
  public titulo: string= "Actualizar Educacion";
  public id: number | null;

  constructor(private educacionService: EducacionService, 
    private router: Router,
    private aRouter: ActivatedRoute) { }

    ngOnInit() {
      this.cargarEdu();
    }
  
    cargarEdu(): void {
      this.aRouter.params.subscribe(params => {
        let id = params ['id']
        if (id){
          this.educacionService.getEducacionid(id).subscribe(
            _educacion => this.educacion = _educacion)
        }
      })
    }

  public updateedu(): void {
    this.educacionService.edit(this.id, this.educacion).subscribe(
      _educacion => {
        Swal.fire('Educacion modificada correctamente', '', 'success'),

        this.router.navigate(['/informacion'])
      })
  }
}