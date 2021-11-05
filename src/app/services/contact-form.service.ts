import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  private url = 'https://gorest.co.in';

  constructor(private http: HttpClient) { }

  consultaPersonas(): Observable<any> {
    return this.http.get<any>(`${this.url}/public/v1/users`);
  }

  consultaSorteos(){
    return this.http.get(`${ this.url }/public/v1/users`)
      .pipe(
        map( (resp: any) => {
          if(resp){
            return resp.data;
          }
        })
        )
      
  }
}
