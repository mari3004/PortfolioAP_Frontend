import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from './educacion';
import { EducacionService } from './educacion.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-formeducation',
  templateUrl: './formeducation.component.html',
  styleUrls: ['./formeducation.component.css']
})
export class FormeducationComponent implements OnInit {

  public educacion: Educacion = new Educacion();
  public titulo: string= "Actualizar Educacion"

  constructor(private educacionService: EducacionService, 
    private router: Router) { }

  ngOnInit() {
  }

  public updateedu(): void {
    this.educacionService.edit(this.educacion).subscribe(
      _response => this.router.navigate(['/informacion'])
    )
  }
  public newedu(): void {
    this.educacionService.create(this.educacion).subscribe(
      _response => {
        this.router.navigate(['/informacion'])
        swal.fire('Educacion creada correctamente', 'success')
      });
    }
}
