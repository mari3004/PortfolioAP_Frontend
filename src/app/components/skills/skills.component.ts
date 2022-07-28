import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../services/porfolio.service';
import { Skills } from './skills';
import { SkillsService} from './skills.service';

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
    public skillsService:SkillsService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPorfolio=data;
    });
    this.skillsService.getSkills().subscribe(
      skills => this.skills = skills);
  }
  edit(skills: Skills): void{
  }
}
