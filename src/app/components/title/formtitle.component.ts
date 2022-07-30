import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';
import { PersonaService } from './persona.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-TitleForm',
  templateUrl: '../title/formtitle.html',
  styleUrls: ['formtitle.component.css']
})
export class FormtitleComponent implements OnInit {

  public persona: Persona = new Persona();
  public titulo: string= "Actualizar Datos"
  
  constructor(private personaService: PersonaService,
    private router: Router) { }

  ngOnInit() {
  }

  public updatetitle(): void {
    this.personaService.edit(this.persona).subscribe(
      persona => {
        this.router.navigate(['/inicio'])
        Swal.fire('Nombre actualizado', 'success')
      })

  }

}
