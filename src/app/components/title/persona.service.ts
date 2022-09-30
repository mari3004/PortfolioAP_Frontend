import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Persona } from './persona';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  
  private urlEndPoint = 'https://guarded-refuge-65976.herokuapp.com/api/persona';

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
  
  getPersona(): Observable <Persona[]> {
    
    return this.http.get<Persona[]>(this.urlEndPoint).pipe(
      catchError(e =>{
        this.isNoAutorizado(e);
        return throwError(e);
      })
    )
  }

  create(persona: Persona) : Observable<Persona>{
    return this.http.post<Persona>(this.urlEndPoint, persona, {headers: this.httpHeaders})
    .pipe(
      map((response: any) => response.persona as Persona),
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

  getPersonaid(id: number): Observable<Persona> {
    return this.http.get<Persona>(`${this.urlEndPoint}/${id}`)
  }

  edit(persona: Persona) : Observable<Persona>{
    return this.http.put<Persona>(`${this.urlEndPoint}/${persona.id}`, persona, {headers: this.httpHeaders})
    .pipe(
      map((response: any) => response.persona as Persona),
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

  delete (id: number) : Observable<Persona>{
    return this.http.delete<Persona>(`${this.urlEndPoint}/ ${id}`, {headers: this.httpHeaders})
    .pipe(catchError(e => {

      if(this.isNoAutorizado(e)){
        return throwError(e);
      }
      console.error (e.error.mensaje);
      swal.fire (e.error.mensaje, e.error.error, 'error');
      return throwError(e);
    }))
  }
  /*subirFoto(archivo: File, id): Observable<HttpEvent<{}>>{

    let formData = new FormData();
    formData.append("archivo", archivo);
    formData.append("id", id)

    const req = new HttpRequest ('POST', `${this.urlEndporint}/upload`, formData, {
      reportProgress: true
    });
    return this.http.request(req).pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    )
  }*/
    
}