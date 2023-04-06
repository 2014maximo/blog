import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FrasesModel } from '../models/web-service.model';

@Injectable({
  providedIn: 'root'
})
export class WebServicesService {

  private recursos: string = 'https://plantillas_dev.gitlab.io/assets/json/';

  constructor(private http: HttpClient) { }

  consultarAstro(): Observable<any[]> {
    return this.http.get<any[]>(`${this.recursos}astro.json`);
  }

  consultarAstroFull(): Observable<any[]> {
    return this.http.get<any[]>(`${this.recursos}estadistica.json`);
  }

  consultarFrases(): Observable<FrasesModel[]> {
    return this.http.get<FrasesModel[]>(`${this.recursos}frases.json`);
  }
}
