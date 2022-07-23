import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from './skills';

@Injectable({
  providedIn: 'root'
})

export class SkillsService {
  private urlEndPoint: string = 'https://guarded-refuge-65976.herokuapp.com/persona/';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }
  
  getSkills(): Observable <Skills[]> {
    return this.http.get<Skills[]>(this.urlEndPoint)
  }

  create(skills: Skills) : Observable<Skills>{
    return this.http.post<Skills>(this.urlEndPoint, skills, {headers: this.httpHeaders})
  }

  getSkillsid(id: number): Observable<Skills> {
    return this.http.get<Skills>(`${this.urlEndPoint}/${id}`)
  }

  edit(skills: Skills) : Observable<Skills>{
    return this.http.put<Skills>(`${this.urlEndPoint}/${skills.id}`, skills, {headers: this.httpHeaders})
  }

  delete (id: number) : Observable<Skills>{
    return this.http.delete<Skills>(`${this.urlEndPoint}/ ${id}`, {headers: this.httpHeaders})
  }
    
}