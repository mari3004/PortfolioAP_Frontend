import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from './experiencia';

@Injectable({
  providedIn: 'root'
})

export class ExperienciaService {
  private urlEndPoint: string = 'https://guarded-refuge-65976.herokuapp.com/persona/';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }
  
  getExperiencia(): Observable <Experiencia[]> {
    return this.http.get<Experiencia[]>(this.urlEndPoint)
  }

  create(experiencia: Experiencia) : Observable<Experiencia>{
    return this.http.post<Experiencia>(this.urlEndPoint, experiencia, {headers: this.httpHeaders})
  }

  getExperienciaid(id: number): Observable<Experiencia> {
    return this.http.get<Experiencia>(`${this.urlEndPoint}/${id}`)
  }

  update(experiencia: Experiencia) : Observable<Experiencia>{
    return this.http.put<Experiencia>(`${this.urlEndPoint}/${experiencia.id}`, experiencia, {headers: this.httpHeaders})
  }

  delete (id: number) : Observable<Experiencia>{
    return this.http.delete<Experiencia>(`${this.urlEndPoint}/ ${id}`, {headers: this.httpHeaders})
  }
    
}