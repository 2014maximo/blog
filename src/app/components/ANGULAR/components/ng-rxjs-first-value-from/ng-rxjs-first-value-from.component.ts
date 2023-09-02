import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '../../../../shared/models/post.model';
import { IndiceDeContenidosModel } from '../../../../shared/models/indice.model';
import { CONTENIDO_1, TEMPLATE_1, TEMPLATE_4 } from './constants/contenido.constant';

@Component({
  selector: 'app-ng-rxjs-first-value-from',
  templateUrl: './ng-rxjs-first-value-from.component.html',
  styleUrls: ['./ng-rxjs-first-value-from.component.css']
})
export class NgRxjsFirstValueFromComponent implements OnInit {

  public idPublicacion = 'ebfeb1a0-10d5-49b0-aaa2-4196e8f1dd98';
  public indiceJavascript: IndiceDeContenidosModel [] = [];
  public template = TEMPLATE_4;

  public breadcrumb: CategoriaModel = {
    activo: true,
    categoria: 'ANGULAR',
    colorText: 'c-Angular',
    ruta: 'angular'
  }
  public contenidos = CONTENIDO_1;

  constructor() { }
  
  ngOnInit(): void {
    this.indiceJavascript = [
      {
        nombre: 'FIRSTVALUEFROM() - RXJS',
        posicion: 'pos-z',
        ruta: 'js-elementos',
        colorFondo: 'bg-Rxjs',
        color: 'c-Rxjs',
        estado: 'activo'
      }
    ]

  }

  public scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
