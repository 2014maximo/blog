import { Component, OnInit } from '@angular/core';
import { CATEGORIA } from '@constants/index';
import { postActual } from '@shared/constants';
import { cargarBreadcrumb, cargarIndice } from '@shared/constants/funciones/funciones-globales';
import { CategoriaModel } from '@shared/models';
import { CategoriaPostModel, DatosPost } from '@shared/models/categorias.model';
import { IndiceDeContenidosModel } from '@shared/models/indice.model';
import { TS_INSTALACION_TEMPLATE_1, TS_INSTALACION_TEMPLATE_2, TS_INSTALACION_TEMPLATE_3, TS_INSTALACION_TEMPLATE_4 } from './constants/instalacion.constant';

@Component({
  selector: 'app-ts-instalacion',
  templateUrl: './ts-instalacion.component.html',
  styleUrls: ['./ts-instalacion.component.css']
})
export class TsInstalacionComponent implements OnInit {

  public breadcrumb = new CategoriaModel();
  public idPublicacion = '81ae9c5f-2fb4-490e-bf10-7c7603fbeee8';
  public publicacion = new DatosPost();
  public categoria = new CategoriaPostModel();
  public indiceTypescript: IndiceDeContenidosModel [] = [];
  public installNodeTypescript = TS_INSTALACION_TEMPLATE_1;
  public correrNodeTypescript = TS_INSTALACION_TEMPLATE_2;
  public archivoTypescript = TS_INSTALACION_TEMPLATE_3;
  public consolaWindows = TS_INSTALACION_TEMPLATE_4;

  constructor() { }

  ngOnInit(): void {
    this.publicacion = postActual(this.idPublicacion)[0];
    this.categoria = CATEGORIA.filter( e => e.nombre === this.publicacion.categoria)[0];
    this.indiceTypescript = cargarIndice(this.publicacion);
    this.breadcrumb = cargarBreadcrumb(this.publicacion);
  }

  public scroll(el: HTMLElement){
    el.scrollIntoView();
  }

}
