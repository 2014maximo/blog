import { Component, OnInit } from '@angular/core';
import { CATEGORIA } from '@constants/index';
import { postActual } from '@shared/constants';
import { cargarBreadcrumb, cargarIndice } from '@shared/constants/funciones/funciones-globales';
import { CategoriaModel } from '@shared/models';
import { CategoriaPostModel, DatosPost } from '@shared/models/categorias.model';
import { IndiceDeContenidosModel } from '@shared/models/indice.model';
import * as HTML from './constants/html-templates.constant';
import { URL } from '@shared/constants/constants/generales.constant';
import { INDICES_HTML } from './constants/html-indices.constant';
import { HtmlModel } from './models/html-general.model';

@Component({
  selector: 'app-html-elementos',
  templateUrl: './html-elementos.component.html',
  styleUrls: ['./html-elementos.component.css']
})
export class HtmlElementosComponent implements OnInit {

  public idPublicacion = '4ca90899-3cfc-455d-a4e3-9b529d80e06f';
  public indiceTypescript: IndiceDeContenidosModel [] = [];
  public publicacion = new DatosPost();
  public categoria = new CategoriaPostModel();
  public breadcrumb = new CategoriaModel();
  public url = URL;
  public HTML = new HtmlModel();

  public pasoDeIndice: IndiceDeContenidosModel [] = [];
  public claseContenedor: string = '';

  constructor() { }

  ngOnInit(): void {
    this.publicacion = postActual(this.idPublicacion)[0];
    this.categoria = CATEGORIA.filter( e => e.nombre === this.publicacion.categoria)[0];
    this.indiceTypescript = cargarIndice(this.publicacion);
    this.breadcrumb = cargarBreadcrumb(this.publicacion);
    this.pasoDeIndice = INDICES_HTML;
  }

  public scroll(el: HTMLElement){
    el.scrollIntoView();
  }

}
