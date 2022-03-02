import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ClasificacionModel } from '../models/estadistica.model';
import { initializeApp } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class EstadisticaService {

  private url = 'https://estadistica-e5eeb.firebaseio.com';

  constructor( private http: HttpClient ) { }

  listarRegistros(): Observable<ClasificacionModel[]> {
    let arreglo = this.http.get<ClasificacionModel[]>(`${this.url}/estadisticas.json`)
    .pipe(
      map( this.crearArreglo )
    );
    return arreglo;
  }

  private crearArreglo( registroObj: object ) {
    const registros: ClasificacionModel[] = [];

/*     Object.keys( registroObj ).forEach( key => {
      const registro: ClasificacionModel = registroObj[key];
      registro.id = key ? key : '';
      registros.push( registro );
    }); */
    return registros;
  }
}
