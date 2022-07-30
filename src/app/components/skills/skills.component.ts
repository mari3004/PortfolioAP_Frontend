import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PorfolioService } from '../services/porfolio.service';
import { Skills } from './skills';
import { SkillsService} from './skills.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  miPorfolio:any;
  skills: Skills[];

  constructor(
    private datosPorfolio:PorfolioService,
    public skillsService:SkillsService,
    private router:Router) { }

  ngOnInit(): void {
    /*this.datosPorfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPorfolio=data;
    });*/
    this.skillsService.getSkills().subscribe(
      skills => this.skills = skills);
  }
  
  public deleteskill(skill: Skills): void {
    swal.fire({
      title: `¿Estas seguro de eliminar ${skill.skill}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.skillsService.delete(skill.id).subscribe(
          response => {
            this.skills = this.skills.filter(ski => ski !== skill)
            swal.fire(
              'La skill ha sido eliminada',
              'success'
        )}
        )
      }
    })
  }
}
