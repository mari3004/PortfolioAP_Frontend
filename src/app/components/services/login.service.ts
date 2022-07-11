import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


export class User {
  constructor(
    public usuario: string,
    public contrasena: string) {}

}

var users = [
  new User('user','ap123ap'),
  new User('superadmin','maribel')
];

@Injectable()
export class LoginService {

  constructor(
    private _router: Router){}

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }

  login(user:any){
    var authenticatedUser = users.find(u => u.usuario === user.usuario);
    if (authenticatedUser && authenticatedUser.contrasena === user.contrasena){
      localStorage.setItem("user", authenticatedUser.usuario);
      this._router.navigate(['admin']);
      return true;
    }
    return false;

  }

   checkCredentials(){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['login']);
    }
  }
}