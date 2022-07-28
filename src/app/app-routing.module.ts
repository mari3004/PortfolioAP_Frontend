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

const app_routes: Routes = [
    { path: 'inicio', component: InicioComponent, canActivate: [AuthGuard] },
    { path: 'experience', component: InformationComponent, canActivate: [AuthGuard] },
    { path: 'skills', component: SkillsComponent, canActivate: [AuthGuard] },
    { path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard] },
    { path: 'contactme', component: ContactComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'inicio/edittitulo', component: FormtitleComponent, canActivate: [AuthGuard]},
    { path: 'informacion/editexp', component: FormexperienceComponent, canActivate: [AuthGuard]},
    { path: 'informacion/editedu', component: FormeducationComponent, canActivate: [AuthGuard]},
    { path: 'skills/editskill', component: FormskillsComponent, canActivate: [AuthGuard]},
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