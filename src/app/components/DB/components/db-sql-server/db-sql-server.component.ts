import { Component, OnInit } from '@angular/core';
import { repositorioContenidoImagenes } from '@constants/generales/globales.constant';
import { CATEGORIA } from '@constants/index';
import { postActual } from '@shared/constants';
import { cargarBreadcrumb, cargarIndice } from '@shared/constants/funciones/funciones-globales';
import { CategoriaModel } from '@shared/models';
import { CategoriaPostModel, DatosPost } from '@shared/models/categorias.model';
import { IndiceDeContenidosModel } from '@shared/models/indice.model';

@Component({
  selector: 'app-db-sql-server',
  templateUrl: './db-sql-server.component.html',
  styles: [
  ]
})
export class DbSqlServerComponent implements OnInit {

  public rutaExternaImagenes: string = ''
  public idPublicacion = 'c20a999c-d149-42fa-95fa-d4a2b7371bb4';
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
    this.rutaExternaImagenes = repositorioContenidoImagenes;
  }

  public scroll(el: HTMLElement){
    el.scrollIntoView();
  }

}
