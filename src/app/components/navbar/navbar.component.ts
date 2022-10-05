import { Component, OnInit } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  miPorfolio:any;

  constructor(public loginService:LoginService,
    private router:Router) { }

  ngOnInit(): void {

  }
  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
  }


  estaAutenticado(){
    return this.loginService.estaAutenticado();
  }

  salir(){ 
    return this.loginService.logout(),
    this.router.navigate(['/login']);
  }
}
