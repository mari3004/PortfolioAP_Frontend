import { NgModule } from "@angular/core";

import{ Routes, RouterModule } from "@angular/router";
import { InformationComponent} from './components/information/information.component';
import { SkillsComponent} from './components/skills/skills.component';
import { ProjectsComponent} from './components/projects/projects.component';
import { ContactComponent} from './components//contact/contact.component';
import { LoginComponent } from './components/navbar/login/login.component';
import { InicioComponent } from "./components/inicio/inicio.component";

const app_routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'experience', component: InformationComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contactme', component: ContactComponent },
    { path: 'login', component: LoginComponent },
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