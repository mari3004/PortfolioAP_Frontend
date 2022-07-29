import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from './skills';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-formskills',
  templateUrl: './formskills.component.html',
  styleUrls: ['./formskills.component.css']
})
export class FormskillsComponent implements OnInit {

  public skills: Skills = new Skills();
  public titulo: string= "Actualizar Skills"


  constructor(private skillsService: SkillsService, 
    private router: Router) { }

  ngOnInit() {
  }

  public updateskill(): void {
    this.skillsService.edit(this.skills).subscribe(
      response => this.router.navigate(['/skills'])
    )

  }

}
