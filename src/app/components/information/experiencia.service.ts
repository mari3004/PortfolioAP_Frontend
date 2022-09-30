import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Experiencia } from './experiencia';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class ExperienciaService {
  
  private urlEndPoint = 'https://guarded-refuge-65976.herokuapp.com/api/experiencia';

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
  
  getExperiencia(): Observable <Experiencia[]> {
    
    return this.http.get<Experiencia[]>(this.urlEndPoint).pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    )
    }


  create(experiencia: Experiencia) : Observable<Experiencia>{
    return this.http.post<Experiencia>(this.urlEndPoint, experiencia, {headers: this.httpHeaders})
    .pipe(
      map((response: any) => response.experiencia as Experiencia),
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

  getExperienciaid(id: number): Observable<Experiencia> {
    return this.http.get<Experiencia>(`${this.urlEndPoint}/${id}`)
  }

  edit(experiencia: Experiencia) : Observable<Experiencia>{
    return this.http.put<Experiencia>(`${this.urlEndPoint}/${experiencia.id}`, experiencia, {headers: this.httpHeaders})
    .pipe(
      map((response: any) => response.experiencia as Experiencia),
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

  delete (id: number) : Observable<Experiencia>{
    return this.http.delete<Experiencia>(`${this.urlEndPoint}/ ${id}`, {headers: this.httpHeaders})
    .pipe(catchError(e => {

      if(this.isNoAutorizado(e)){
        return throwError(e);
      }
      console.error (e.error.mensaje);
      swal.fire (e.error.mensaje, e.error.error, 'error');
      return throwError(e);
    }))     
  }
    
}