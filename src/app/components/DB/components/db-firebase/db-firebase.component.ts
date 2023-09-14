import { Component, OnInit } from '@angular/core';
import { CATEGORIA } from '@constants/index';
import { postActual } from '@shared/constants';
import { cargarBreadcrumb, cargarIndice } from '@shared/constants/funciones/funciones-globales';
import { CategoriaModel } from '@shared/models';
import { CategoriaPostModel, DatosPost } from '@shared/models/categorias.model';
import { IndiceDeContenidosModel } from '@shared/models/indice.model';
import { copiarAlPortapapeles } from '@app/shared/constants/funciones/portapapeles';
import { repositorioContenidoImagenes } from '@constants/generales/globales.constant';

@Component({
  selector: 'app-db-firebase',
  templateUrl: './db-firebase.component.html',
  styles: [
  ]
})
export class DbFirebaseComponent implements OnInit {

  public idPublicacion = 'e0d1b708-45bc-4749-a648-3c41d14ab7cc';
  public indiceTypescript: IndiceDeContenidosModel [] = [];
  public publicacion = new DatosPost();
  public categoria = new CategoriaPostModel();
  public breadcrumb = new CategoriaModel();
  public rutaImagen: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.publicacion = postActual(this.idPublicacion)[0];
    this.categoria = CATEGORIA.filter( e => e.nombre === this.publicacion.categoria)[0];
    this.indiceTypescript = cargarIndice(this.publicacion);
    this.breadcrumb = cargarBreadcrumb(this.publicacion);
    this.rutaImagen = repositorioContenidoImagenes;

  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  public copiarAlPortapapeles(cadenaAlclipboard: string) {
    copiarAlPortapapeles(cadenaAlclipboard);
  }

}
