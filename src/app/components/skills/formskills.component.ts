import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Skills } from './skills';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-formskills',
  templateUrl: './formskills.component.html',
  styleUrls: ['./formskills.component.css']
})
export class FormskillsComponent implements OnInit {

  public skills: Skills = new Skills();
  public titulo: string= "Crear Skill"


  constructor(private skillsService: SkillsService, 
    private router: Router) { }

  ngOnInit() {
  
  }

   
  public newskill(): void {
    this.skillsService.create(this.skills).subscribe(
      _response => {
        Swal.fire('Skill creada correctamente', '', 'success')
      });
      this.router.navigate(['/skills'])
  }

}