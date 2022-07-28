import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';
import { PersonaService } from './persona.service';
/*import swal from 'sweetalert2';*/

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  
  personas: Persona[];

  constructor(
    public personaService: PersonaService) {

   }

   ngOnInit(): void {
    this.personaService.getPersona().subscribe(
      personas => this.personas = personas);
  }
  

  /*delete(id: number): void {
    swal.fire({
      title: '¿Estas seguro?',
      text: `¿Seguro que desea eliminar esta persona?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, mantener',
    }).then((result) => {
      if (result.isConfirmed) {

        this.personaService.delete().subscribe(
          response =>{
            this.persona = this.persona.filter((per: any) => {
              return per != this.persona;
            })
            swal.fire(
              'Eliminado correctamente',
              'success'
            )
          }
        )
        
      }
    })
  } */
}