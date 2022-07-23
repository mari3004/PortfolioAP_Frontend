import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from './educacion';

@Injectable({
  providedIn: 'root'
})

export class EducacionService {
  private urlEndPoint: string = 'https://guarded-refuge-65976.herokuapp.com/persona/';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }
  
  getEducacion(): Observable <Educacion[]> {
    return this.http.get<Educacion[]>(this.urlEndPoint)
  }

  create(educacion: Educacion) : Observable<Educacion>{
    return this.http.post<Educacion>(this.urlEndPoint, educacion, {headers: this.httpHeaders})
  }

  getEducacionid(id: number): Observable<Educacion> {
    return this.http.get<Educacion>(`${this.urlEndPoint}/${id}`)
  }

  update(educacion: Educacion) : Observable<Educacion>{
    return this.http.put<Educacion>(`${this.urlEndPoint}/${educacion.id}`, educacion, {headers: this.httpHeaders})
  }

  delete (id: number) : Observable<Educacion>{
    return this.http.delete<Educacion>(`${this.urlEndPoint}/ ${id}`, {headers: this.httpHeaders})
  }
    
}