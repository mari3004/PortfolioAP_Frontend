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

}