import { Component, OnInit } from '@angular/core';
import { Experiencia } from './experiencia';

@Component({
  selector: 'app-formexperience',
  templateUrl: './formexperience.component.html',
  styleUrls: ['./formexperience.component.css']
})
export class FormexperienceComponent implements OnInit {

  public experiencia: Experiencia = new Experiencia();
  public titulo: string= "Actualizar Experiencia"

  constructor() { }

  ngOnInit() {
  }
  updateexp(): void{

  }

}
