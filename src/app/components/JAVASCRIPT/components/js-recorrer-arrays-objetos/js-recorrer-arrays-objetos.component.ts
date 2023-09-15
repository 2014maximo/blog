import { Component, OnInit } from '@angular/core';
import { repositorioContenidoImagenes } from 'src/app/constants/generales/globales.constant';
import { HeaderPostModel, CategoriaModel } from '../../../../shared/models/post.model';
import { IndiceDeContenidosModel } from '@shared/models/indice.model';
import { CategoriaPostModel, DatosPost } from '@shared/models/categorias.model';
import { postActual } from '@shared/constants';
import { CATEGORIA } from '@constants/index';
import { cargarBreadcrumb, cargarIndice } from '@shared/constants/funciones/funciones-globales';

@Component({
  selector: 'app-js-recorrer-arrays-objetos',
  templateUrl: './js-recorrer-arrays-objetos.component.html',
  styleUrls: ['./js-recorrer-arrays-objetos.component.css']
})
export class JsRecorrerArraysObjetosComponent implements OnInit {
  public rutaImagen: string = '';

  public idPublicacion = 'bd16e1f4-b3dd-45d6-8400-c9e0a5ced350';
  public indiceTypescript: IndiceDeContenidosModel [] = [];
  public publicacion = new DatosPost();
  public categoria = new CategoriaPostModel();
  public breadcrumb = new CategoriaModel();

  constructor() { }

  ngOnInit(): void {
    this.publicacion = postActual(this.idPublicacion)[0];
    this.categoria = CATEGORIA.filter( e => e.nombre === this.publicacion.categoria)[0];
    this.indiceTypescript = cargarIndice(this.publicacion);
    this.breadcrumb = cargarBreadcrumb(this.publicacion);
    this.rutaImagen = repositorioContenidoImagenes;
  }

  public scroll(el: HTMLElement){
    el.scrollIntoView();
  }

}

