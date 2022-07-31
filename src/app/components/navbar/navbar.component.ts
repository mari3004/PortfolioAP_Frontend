import { Component, OnInit } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { PorfolioService } from '../services/porfolio.service';
import { LoginService } from './login/login.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  miPorfolio:any;

  constructor(public loginservice:LoginService,
    private datosPorfolio:PorfolioService,
    private router:Router) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPorfolio=data

    })
  }
  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
  }


  estaAutenticado(){
    return this.loginservice.estaAutenticado();
  }

  salir(){ 
    return this.loginservice.logout(),
    this.router.navigateByUrl('/login');
  }
}
