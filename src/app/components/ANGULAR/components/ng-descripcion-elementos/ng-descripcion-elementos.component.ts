import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '@shared/models/post.model';
import { IndiceDeContenidosModel } from '@shared/models/indice.model';
import { CategoriaPostModel, DatosPost } from '@shared/models/categorias.model';
import { postActual } from '@shared/constants';
import { CATEGORIA } from '@constants/index';
import { cargarBreadcrumb, cargarIndice } from '@shared/constants/funciones/funciones-globales';

@Component({
  selector: 'app-ng-descripcion-elementos',
  templateUrl: './ng-descripcion-elementos.component.html',
  styleUrls: ['./ng-descripcion-elementos.component.css']
})
export class NgDescripcionElementosComponent implements OnInit {

  public idPublicacion = 'ca5b7f7a-af2e-47ce-a69e-4ccf6ec2a317';
  public indiceTypescript: IndiceDeContenidosModel [] = [];
  public publicacion = new DatosPost();
  public categoria = new CategoriaPostModel();
  public breadcrumb = new CategoriaModel();
  public pasoDeIndice: IndiceDeContenidosModel [] = [];

  constructor() { }

  ngOnInit(): void {
    this.publicacion = postActual(this.idPublicacion)[0];
    this.categoria = CATEGORIA.filter( e => e.nombre === this.publicacion.categoria)[0];
    this.indiceTypescript = cargarIndice(this.publicacion);
    this.breadcrumb = cargarBreadcrumb(this.publicacion);
    this.pasoDeIndice = [
      {
        nombre: 'PATRÓN SPA',
        posicion: 'pos-z',
        ruta: 'patron-spa',
        colorFondo: 'bg-light',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'PATRÓN MVC',
        posicion: 'rot-3',
        ruta: 'patron-mvc',
        colorFondo: 'bg-light',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'URL FRAGMENTS',
        posicion: 'rot-2',
        ruta: 'url-fragments',
        colorFondo: 'bg-light',
        color: 't2',
        estado: 'activo'
      },
    ]
  }

  public scroll(el: HTMLElement){
    el.scrollIntoView();
  }

  public navegar(ulr: string){
    window.open(ulr, "_blank");
  }

}

