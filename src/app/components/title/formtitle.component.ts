import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';
import { PersonaService } from './persona.service';
import { Router } from '@angular/router';

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
      response => this.router.navigate(['/inicio'])
    )

  }

}
