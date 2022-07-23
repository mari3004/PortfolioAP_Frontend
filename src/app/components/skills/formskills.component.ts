import { Component, OnInit } from '@angular/core';
import { Skills } from './skills';

@Component({
  selector: 'app-formskills',
  templateUrl: './formskills.component.html',
  styleUrls: ['./formskills.component.css']
})
export class FormskillsComponent implements OnInit {

  public skills: Skills = new Skills();
  public titulo: string= "Actualizar Skills"


  constructor() { }

  ngOnInit() {
  }

  updateskill(): void{

  }

}
