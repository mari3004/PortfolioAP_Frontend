import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './components/navbar/login/login.service';

@Component({
  selector: 'app-root',
  providers: [LoginService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private _service:LoginService,
    private loginService:LoginService,
    private router:Router){}

ngOnInit(){
}

salir(){ 
  return this.loginService.logout(),
  this.router.navigate(['/login']);
}

}