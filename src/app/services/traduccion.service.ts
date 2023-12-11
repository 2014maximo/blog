import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraduccionService {

  private cambioIdiomaSubject = new Subject<string>();
  public cambioIdioma$ = this.cambioIdiomaSubject.asObservable();

  constructor(private translate: TranslateService) { }

  public cambiarIdioma(idioma:string){
    
    this.translate.use(idioma);
    this.cambioIdiomaSubject.next(idioma);
  }
}
