import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //Endpoint del Backend
  private backendURL: string = "http://localhost:8080/fullstack/users";
   
  constructor(
    //HttpClient para proporcionar métodos que reciben datos del backend
    private httpClient: HttpClient
    ) { }
 
  //Methods
  findAllUsers(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(`${this.backendURL}`);
  }
  ...
...
}

  constructor() { }
}
