import { Component, OnInit } from '@angular/core';
import { CATEGORIA } from '@constants/index';
import { postActual } from '@shared/constants';
import { cargarBreadcrumb, cargarIndice } from '@shared/constants/funciones/funciones-globales';
import { CategoriaModel } from '@shared/models';
import { CategoriaPostModel, DatosPost } from '@shared/models/categorias.model';
import { IndiceDeContenidosModel } from '@shared/models/indice.model';

@Component({
  selector: 'app-lx-comandos-m-usados',
  templateUrl: './lx-comandos-m-usados.component.html',
  styleUrls: ['./lx-comandos-m-usados.component.css']
})
export class LxComandosMUsadosComponent implements OnInit {

  public idPublicacion = 'c0d8a7db-934b-48a1-820c-d0d3c53d557c';
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

  public copiarAlPortapapeles(cadenaAlclipboard: string) {
    this.copiarAlPortapapeles(cadenaAlclipboard);
  }

}

