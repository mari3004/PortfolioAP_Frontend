import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Skills } from './skills';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class SkillsService {
  private urlEndPoint: 'https://guarded-refuge-65976.herokuapp.com/api/skills';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient,
    private router : Router) { }

  private isNoAutorizado(e: { status: number; }): boolean {
    if(e.status==401 || e.status == 403){
    this.router.navigate(['/login']);
    return true;
  }
  return false;
}
  
  getSkills(): Observable <Skills[]> {
    
    return this.http.get<Skills[]>(this.urlEndPoint).pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    )
    }


  create(skills: Skills) : Observable<Skills>{
    return this.http.post<Skills>(this.urlEndPoint, skills, {headers: this.httpHeaders})
    .pipe(
      map((response: any) => response.skills as Skills),
      catchError(e => {
        if(this.isNoAutorizado(e)){
          return throwError(e);
        }
        if (e.status == 400) {
          return throwError(e);
        }
        console.error (e.error.mensaje);
        swal.fire (e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  getSkillsid(id: number): Observable<Skills> {
    return this.http.get<Skills>(`${this.urlEndPoint}/${id}`)
  }

  edit(skills: Skills) : Observable<Skills>{
    return this.http.put<Skills>(`${this.urlEndPoint}/${skills.id}`, skills, {headers: this.httpHeaders})
    .pipe(
      map((response: any) => response.skills as Skills),
      catchError(e => {
        if(this.isNoAutorizado(e)){
          return throwError(e);
        }
        if (e.status == 400) {
          return throwError(e);
        }
        console.error (e.error.mensaje);
        swal.fire (e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  delete (id: number) : Observable<Skills>{
    return this.http.delete<Skills>(`${this.urlEndPoint}/ ${id}`, {headers: this.httpHeaders})
    catchError(e => {

      if(this.isNoAutorizado(e)){
        return throwError(e);
      }
      console.error (e.error.mensaje);
      swal.fire (e.error.mensaje, e.error.error, 'error');
      return throwError(e);
    })     
  }
    
}