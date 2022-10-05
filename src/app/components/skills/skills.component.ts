import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PorfolioService } from '../services/porfolio.service';
import { Skills } from './skills';
import { SkillsService} from './skills.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  skills: Skills[];

  constructor(
    public skillsService:SkillsService,
    private router:Router) { }

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe(
      skills => this.skills = skills);
  }
  
  public deleteskill(skill: Skills): void {
    Swal.fire({
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
          _response => {
            this.skills = this.skills.filter(ski => ski !== skill)
            Swal.fire('La educacion ha sido eliminada!', '', 'success'),
            window.location.reload()
        }
        )
      }
    })
  }
}
