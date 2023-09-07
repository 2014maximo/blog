import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '../../../../shared/models/post.model';
import { IndiceDeContenidosModel } from '../../../../shared/models/indice.model';
import { CONTENIDO_1, TEMPLATE_1, TEMPLATE_2, TEMPLATE_3, TEMPLATE_4, TEMPLATE_5 } from './constants/contenido.constant';
import { CategoriaPostModel, DatosPost } from '@shared/models/categorias.model';
import { postActual } from '@shared/constants';
import { CATEGORIA } from '@app/constants';
import { cargarBreadcrumb, cargarIndice } from '@shared/constants/funciones/funciones-globales';

@Component({
  selector: 'app-ng-rxjs-first-value-from',
  templateUrl: './ng-rxjs-first-value-from.component.html',
  styleUrls: ['./ng-rxjs-first-value-from.component.css']
})
export class NgRxjsFirstValueFromComponent implements OnInit {

  public idPublicacion = 'ebfeb1a0-10d5-49b0-aaa2-4196e8f1dd98';
  public indiceAngular: IndiceDeContenidosModel [] = [];
  public template = TEMPLATE_1;
  public template2 = TEMPLATE_2;
  public template3 = TEMPLATE_3;
  public template4 = TEMPLATE_4;
  public template5 = TEMPLATE_5;
  public publicacion = new DatosPost();
  public categoria = new CategoriaPostModel();
  public breadcrumb = new CategoriaModel();
  public contenidos = CONTENIDO_1;

  constructor() { }
  
  ngOnInit(): void {
    this.publicacion = postActual(this.idPublicacion)[0];
    this.categoria = CATEGORIA.filter(e => e.nombre === this.publicacion.categoria)[0];
    this.indiceAngular = cargarIndice(this.publicacion);
    this.breadcrumb = cargarBreadcrumb(this.publicacion);
  }

  public scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
