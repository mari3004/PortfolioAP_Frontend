import { Component, OnInit } from '@angular/core';
import { Educacion } from './educacion';

@Component({
  selector: 'app-formeducation',
  templateUrl: './formeducation.component.html',
  styleUrls: ['./formeducation.component.css']
})
export class FormeducationComponent implements OnInit {

  public educacion: Educacion = new Educacion();
  public titulo: string= "Actualizar Educacion"

  constructor() { }

  ngOnInit() {
  }

  updateedu(): void{

  }

}
