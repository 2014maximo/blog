import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '@shared/models/post.model';
import { IndiceDeContenidosModel } from '@shared/models/indice.model';
import { CategoriaPostModel, DatosPost } from '@shared/models/categorias.model';
import { postActual } from '@shared/constants';
import { CATEGORIA } from '@constants/index';
import { cargarBreadcrumb, cargarIndice } from '@shared/constants/funciones/funciones-globales';

@Component({
  selector: 'app-java-glassfish',
  templateUrl: './java-glassfish.component.html',
  styles: [
  ]
})
export class JavaGlassfishComponent implements OnInit {

  public idPublicacion = '4f7645eb-12eb-4214-bd26-dfe68c89cfef';
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
