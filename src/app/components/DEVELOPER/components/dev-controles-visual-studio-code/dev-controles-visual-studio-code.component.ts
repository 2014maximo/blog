import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '@shared/models/post.model';
import { IndiceDeContenidosModel } from '@shared/models/indice.model';
import { CategoriaPostModel, DatosPost } from '@shared/models/categorias.model';
import { postActual } from '@shared/constants';
import { CATEGORIA } from '@constants/index';
import { cargarBreadcrumb, cargarIndice } from '@shared/constants/funciones/funciones-globales';

@Component({
  selector: 'app-dev-controles-visual-studio-code',
  templateUrl: './dev-controles-visual-studio-code.component.html',
  styleUrls: ['./dev-controles-visual-studio-code.component.css']
})
export class DevControlesVisualStudioCodeComponent implements OnInit {

  public idPublicacion = 'aebf78f7-3ffa-4fa0-bde2-ac4cd4d3c07d';
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
