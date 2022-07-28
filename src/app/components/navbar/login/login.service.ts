import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Usuario } from './usuario';


@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private urlsignup = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC0GjN42dlldxMt4o1paKG2StubRaK5tSI';
  private urlsignin = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC0GjN42dlldxMt4o1paKG2StubRaK5tSI';
  /*private apikey = 'AIzaSyC0GjN42dlldxMt4o1paKG2StubRaK5tSI';*/

  /*Crear nuevo usuario
  https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  version vieja
  "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]"



   Login
  https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY] 

  version vieja
  https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY] */

  userToken: string;

  
  constructor(private http: HttpClient){
    this.leerToken();
  }

  logout(){
    localStorage.removeItem('token');
  }

  login(usuario: Usuario){
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };
    return this.http.post(
      `${this.urlsignin}`,
      authData
    ).pipe(
      map( resp => {
        this.guardarToken( resp ['idToken'] );
        return resp;
      })
    );
  }

  newuser(usuario: Usuario){
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };
    return this.http.post(
      `${this.urlsignup}`,
      authData
    ).pipe(
      map( resp => {
        this.guardarToken( resp ['idToken'] );
        return resp;
      })
    );
  }

  private guardarToken( idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds( 3600 );

    localStorage.setItem('expira', hoy.getTime().toString());
  }

  leerToken(){
    if ( localStorage.getItem('token') ) {
      this.userToken = localStorage.getItem('token')!;
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  estaAutenticado(): boolean{

    if ( this.userToken.length<2){
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if( expiraDate > new Date()){
      return true;
    } else{
      return false
    }
  }

}