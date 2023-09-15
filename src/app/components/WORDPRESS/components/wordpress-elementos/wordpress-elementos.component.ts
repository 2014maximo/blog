import { Component, OnInit } from '@angular/core';
import { CATEGORIA } from '@constants/index';
import { postActual } from '@shared/constants';
import { cargarBreadcrumb, cargarIndice } from '@shared/constants/funciones/funciones-globales';
import { CategoriaModel } from '@shared/models';
import { CategoriaPostModel, DatosPost } from '@shared/models/categorias.model';
import { IndiceDeContenidosModel } from '@shared/models/indice.model';

@Component({
  selector: 'app-wordpress-elementos',
  templateUrl: './wordpress-elementos.component.html',
  styleUrls: ['./wordpress-elementos.component.css']
})
export class WordpressElementosComponent implements OnInit {

  public idPublicacion = 'a4c97578-bdf9-46c3-a376-23b8814687ae';
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
  }

  public scroll(el: HTMLElement){
    el.scrollIntoView();
  }

}