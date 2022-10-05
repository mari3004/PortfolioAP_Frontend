import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TitleComponent } from './components/title/title.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { InformationComponent } from './components/information/information.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/navbar/login/login.component';
import { FormtitleComponent } from './components/title/formtitle.component';
import { FormeducationComponent } from './components/information/formeducation.component';
import { FormexperienceComponent } from './components/information/formexperience.component';
import { FormskillsComponent } from './components/skills/formskills.component';
import { FormeducationeditComponent } from './components/information/formeducationedit.component';
import { FormexpeditComponent } from './components/information/formexpedit.component';
import { FormskilleditComponent } from './components/skills/formskilledit.component';



import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { InicioComponent } from './components/inicio/inicio.component';

import { PersonaService } from './components/title/persona.service';
import { ExperienciaService } from './components/information/experiencia.service';
import { EducacionService } from './components/information/educacion.service';
import { SkillsService } from './components/skills/skills.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistroComponent } from './components/navbar/login/registro/registro.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitleComponent,
    AboutmeComponent,
    InformationComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    InicioComponent,
    FormtitleComponent,
    FormeducationComponent,
    FormexperienceComponent,
    FormskillsComponent,
    RegistroComponent,
    FormeducationeditComponent,
    FormexpeditComponent,
    FormskilleditComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    BrowserAnimationsModule,
    
  ],

  providers: [
    PersonaService,
    ExperienciaService,
    EducacionService,
    SkillsService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }