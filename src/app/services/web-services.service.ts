import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebServicesService {

  private recursos: string = 'https://plantillas_dev.gitlab.io/assets/json/';

  constructor(private http: HttpClient) { }

  consultarAstro(): Observable<any[]> {
    return this.http.get<any[]>(`${this.recursos}astro.json`);
  }
}
