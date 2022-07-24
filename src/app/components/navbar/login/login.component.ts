import { Component, OnInit } from '@angular/core';
import {LoginService, User} from './login.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user = new User('','');
  public errorMsg = ''

  constructor(private _service:LoginService) { }

  login() {
    if(!this._service.login(this.user)){
        this.errorMsg = 'Hay un error en su usuario y/o contraseña. Vuelva a intentarlo';
    }
}
  ngOnInit(): void {
  }
}
