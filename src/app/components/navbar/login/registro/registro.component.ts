import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { Usuario } from '../usuario';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  usuario: Usuario;
  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
    this.usuario = new Usuario();

  }
  onSubmit( form: NgForm ) {

    if ( form.invalid ) { return; }

    Swal.fire({
      text: 'Espere por favor',
      icon: 'info',
      allowOutsideClick: false});
      Swal.showLoading();

    this.loginService.newuser(this.usuario)
    .subscribe(resp => {
      console.log(resp);
      Swal.close();
      
      this.router.navigateByUrl('/inicio')

    }, (err) => {
      console.log(err.error.error.message);
      Swal.fire({
        title: 'Error al crear un usuario',
        text: err.error.error.message,
        icon: 'error',})
    }
);
  }
}
