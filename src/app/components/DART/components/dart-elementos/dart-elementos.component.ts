import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '../../../../shared/models/post.model';

import { rutaCatego } from '../../../../constants/generales/globales.constant';
import { IndiceDeContenidosModel } from '@shared/models/indice.model';
import { CategoriaPostModel, DatosPost } from '@shared/models/categorias.model';
import { postActual } from '@shared/constants';
import { CATEGORIA } from '@app/constants';
import { cargarBreadcrumb, cargarIndice } from '@shared/constants/funciones/funciones-globales';
import { DART_01 } from './constants/dart-elementos.constant';

@Component({
  selector: 'app-dart-elementos',
  templateUrl: './dart-elementos.component.html',
  styleUrls: ['./dart-elementos.component.css']
})
export class DartElementosComponent implements OnInit {

  public idPublicacion = 'abca9c03-f685-47df-aa15-8c52051955c2';
  public indiceDart: IndiceDeContenidosModel [] = [];
  public publicacion = new DatosPost();
  public categoria = new CategoriaPostModel();
  public breadcrumb = new CategoriaModel();

  public template = DART_01;

  public rutaCatego: string = rutaCatego;

  constructor() {
    this.publicacion = postActual(this.idPublicacion)[0];
    this.categoria = CATEGORIA.filter( e => e.nombre === this.publicacion.categoria)[0];
    this.indiceDart = cargarIndice(this.publicacion);
    this.breadcrumb = cargarBreadcrumb(this.publicacion);
  }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
