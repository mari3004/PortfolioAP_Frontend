import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Skills } from './skills';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-formskilledit',
  templateUrl: './formskilledit.component.html',
  styleUrls: ['formskilledit.component.css']
})
export class FormskilleditComponent implements OnInit {

  public skills: Skills = new Skills();
  public titulo: string= "Actualizar Skill";
  public id: number | null;


  constructor(private skillsService: SkillsService, 
    private router: Router,
    private aRouter: ActivatedRoute) { }


  ngOnInit() {
    this.cargarSkill();
  }

  cargarSkill(): void {
    this.aRouter.params.subscribe(params => {
      let id = params ['id']
      if (id){
        this.skillsService.getSkillsid(id).subscribe(
          _skills => this.skills = _skills)
      }
    })
  }


  public updateskill(): void {
    this.skillsService.edit(this.id, this.skills).subscribe(
      _skills => {
        Swal.fire('Skill actualizada', '', 'success'),
        
        this.router.navigate(['/skills']);
      })
  }
}
