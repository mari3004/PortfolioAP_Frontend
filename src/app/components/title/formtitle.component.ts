import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';
import { PersonaService } from './persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-TitleForm',
  templateUrl: '../title/formtitle.html',
  styleUrls: ['formtitle.component.css']
})
export class FormtitleComponent implements OnInit {

  public persona: Persona = new Persona();
  public titulo: string= "Actualizar Datos";
  public id: number | null;
  
  constructor(private personaService: PersonaService,
    private router: Router,
    private aRouter: ActivatedRoute) { 

    }

  ngOnInit() {
    this.cargarPersona();
  }

  cargarPersona(): void {
    this.aRouter.params.subscribe(params => {
      let id = params ['id']
      if (id){
        this.personaService.getPersonaid(id).subscribe(
          _persona => this.persona = _persona)
      }
    })
  }


  public updatetitle(): void {
    this.personaService.edit(this.id, this.persona).subscribe(
      _persona => {
        Swal.fire('Nombre actualizado', '', 'success'),
              
        this.router.navigate(['/inicio']);
      })
  }
}
