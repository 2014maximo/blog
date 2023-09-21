import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '@shared/models/post.model';
import { copiarAlPortapapeles } from '@shared/constants/funciones/portapapeles';
import { IndiceDeContenidosModel } from '@shared/models/indice.model';
import { CategoriaPostModel, DatosPost } from '@shared/models/categorias.model';
import { postActual } from '@shared/constants';
import { CATEGORIA } from '@constants/index';
import { cargarBreadcrumb, cargarIndice } from '@shared/constants/funciones/funciones-globales';
import { repositorioContenidoImagenes } from '@constants/generales/globales.constant';

@Component({
  selector: 'app-dev-glosario',
  templateUrl: './dev-glosario.component.html',
  styleUrls: ['./dev-glosario.component.css']
})
export class DevGlosarioComponent implements OnInit {

  public idPublicacion = 'bec3c210-7438-4082-ab68-ff836b42b3eb';
  public indiceTypescript: IndiceDeContenidosModel [] = [];
  public publicacion = new DatosPost();
  public categoria = new CategoriaPostModel();
  public breadcrumb = new CategoriaModel();
  public rutaImagen = '';

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

  public copiarAlPortapapeles(cadenaAlclipboard: string) {
    copiarAlPortapapeles(cadenaAlclipboard);
  }
}


