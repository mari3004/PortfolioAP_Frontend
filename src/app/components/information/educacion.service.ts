import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Educacion } from './educacion';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class EducacionService {

  private urlEndPoint = 'https://guarded-refuge-65976.herokuapp.com/api/educacion';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient,
    private router: Router) { }
  
  private isNoAutorizado(e: { status: number; }): boolean {
    if(e.status==401 || e.status == 403){
    this.router.navigate(['/login']);
    return true;
  }
  return false;
}

  getEducacion(): Observable <Educacion[]> {
    
    return this.http.get<Educacion[]>(this.urlEndPoint).pipe(
      catchError(e =>{
        this.isNoAutorizado(e);
        return throwError(e);
      })
    )
  }

  create(educacion: Educacion) : Observable<Educacion>{
    return this.http.post<Educacion>(this.urlEndPoint, educacion, {headers: this.httpHeaders})
    .pipe(
      map((response: any) => response.educacion as Educacion),
      catchError(e => {
        if(this.isNoAutorizado(e)){
          return throwError(e);
        }
        if (e.status == 400) {
          return throwError(e);
        }
      })
    );
  }

  getEducacionid(id): Observable<Educacion> {
    return this.http.get<Educacion>(`${this.urlEndPoint}/${id}`)
  }

  edit(id:number, educacion: Educacion) : Observable<Educacion>{
    return this.http.put<Educacion>(`${this.urlEndPoint}/${educacion.id}`, educacion, {headers: this.httpHeaders})
    .pipe(
      map((response: any) => response.persona as Educacion),
      catchError(e => {
        if(this.isNoAutorizado(e)){
          return throwError(e);
        }
        if (e.status == 400) {
          return throwError(e);
        }
      })
    );
  }

  delete (id: number) : Observable<Educacion>{
    return this.http.delete<Educacion>(`${this.urlEndPoint}/ ${id}`, {headers: this.httpHeaders})
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