import { Component, OnInit } from '@angular/core';
import { CATEGORIA } from '@constants/index';
import { postActual } from '@shared/constants';
import { cargarBreadcrumb, cargarIndice } from '@shared/constants/funciones/funciones-globales';
import { CategoriaModel } from '@shared/models';
import { CategoriaPostModel, DatosPost } from '@shared/models/categorias.model';
import { IndiceDeContenidosModel } from '@shared/models/indice.model';
import { MARKETING } from './constants/dev-busqueda.constant';

@Component({
  selector: 'app-dev-busqueda-empleo',
  templateUrl: './dev-busqueda-empleo.component.html',
  styleUrls: ['./dev-busqueda-empleo.component.css']
})
export class DevBusquedaEmpleoComponent implements OnInit {

  public idPublicacion = '27df71a4-6654-4349-9481-06f93c3639d6';
  public indiceTypescript: IndiceDeContenidosModel [] = [];
  public publicacion = new DatosPost();
  public categoria = new CategoriaPostModel();
  public breadcrumb = new CategoriaModel();

  public marketing: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.publicacion = postActual(this.idPublicacion)[0];
    this.categoria = CATEGORIA.filter( e => e.nombre === this.publicacion.categoria)[0];
    this.indiceTypescript = cargarIndice(this.publicacion);
    this.breadcrumb = cargarBreadcrumb(this.publicacion);

    this.marketing = MARKETING;
  }

  public scroll(el: HTMLElement){
    el.scrollIntoView();
  }

}
