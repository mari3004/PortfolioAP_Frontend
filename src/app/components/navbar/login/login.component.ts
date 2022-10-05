import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from './usuario';
import { LoginService } from './login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;
  recordar = false;
  
  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.usuario = new Usuario();

    if ( localStorage.getItem('email') ){
      this.usuario.email = localStorage.getItem('email');
      this.recordar = true;
  }
}

  Log ( form : NgForm ) {

    if ( form.invalid ) { return; }

    Swal.fire({
      text: 'Espere por favor',
      icon: 'info',
      allowOutsideClick: false});
      Swal.showLoading();


    this.loginService.login( this.usuario )
    .subscribe({
      next:resp => {
      console.log(resp);
      Swal.close();
      this.router.navigate(['/inicio']);

      if ( this.recordar ){
        localStorage.setItem('email', this.usuario.email)
        
    };

    }, 
      error: err => {
      console.log(err.error.error.message);
      Swal.fire({
        title: 'Error en el ingreso',
        text: err.error.error.message,
        icon: 'error',})

    }}
);
  }
}
