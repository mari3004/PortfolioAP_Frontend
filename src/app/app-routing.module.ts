import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { InformationComponent} from './components/information/information.component';
import { SkillsComponent} from './components/skills/skills.component';
import { ProjectsComponent} from './components/projects/projects.component';
import { ContactComponent} from './components//contact/contact.component';
import { LoginComponent } from './components/navbar/login/login.component';
import { InicioComponent } from "./components/inicio/inicio.component";
import { FormtitleComponent } from "./components/title/formtitle.component";
import { FormexperienceComponent } from "./components/information/formexperience.component";
import { FormeducationComponent } from "./components/information/formeducation.component";
import { FormskillsComponent } from "./components/skills/formskills.component";
import { RegistroComponent } from "./components/navbar/login/registro/registro.component";
import { AuthGuard } from "./components/navbar/login/auth.guard";
import { FormexpeditComponent } from "./components/information/formexpedit.component";
import { FormeducationeditComponent } from "./components/information/formeducationedit.component";
import { FormskilleditComponent } from "./components/skills/formskilledit.component";

const app_routes: Routes = [
    { path: 'inicio', component: InicioComponent, canActivate: [AuthGuard] },
    { path: 'experience', component: InformationComponent, canActivate: [AuthGuard] },
    { path: 'skills', component: SkillsComponent, canActivate: [AuthGuard] },
    { path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard] },
    { path: 'contactme', component: ContactComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'inicio/edittitulo/:id', component: FormtitleComponent, canActivate: [AuthGuard]},
    { path: 'informacion/newexp', component: FormexperienceComponent, canActivate: [AuthGuard]},
    { path: 'informacion/editexp/:id', component: FormexpeditComponent, canActivate: [AuthGuard]},
    { path: 'informacion/newedu', component: FormeducationComponent, canActivate: [AuthGuard]},
    { path: 'informacion/editedu/:id', component: FormeducationeditComponent, canActivate: [AuthGuard]},
    { path: 'skills/newskill', component: FormskillsComponent, canActivate: [AuthGuard]},
    { path: 'skills/editskill/:id', component: FormskilleditComponent, canActivate: [AuthGuard]},
    { path: '**', redirectTo: 'inicio', pathMatch: 'full'},

];

@NgModule({
    imports: [
        RouterModule.forRoot ( app_routes)
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule { }