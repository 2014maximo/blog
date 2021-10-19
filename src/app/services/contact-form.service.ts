import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaModel } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  private url = 'https://gorest.co.in';

  constructor(private http: HttpClient) { }

  consultaPersonas(): Observable<PersonaModel[]> {
    return this.http.get<PersonaModel[]>(`${this.url}/public/v1/users`);
  }
}
