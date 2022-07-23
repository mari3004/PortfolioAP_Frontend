import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../services/porfolio.service';
import { Persona } from './persona';
import { PersonaService } from './persona.service';
/*import swal from 'sweetalert2';*/

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  
  miPorfolio:any;
  public persona: Persona = new Persona();

  constructor(
    private datosPorfolio:PorfolioService,
    public personaService: PersonaService) {

   }

   ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPorfolio=data});

    this.personaService.getPersona().subscribe(
      persona => persona = persona)
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