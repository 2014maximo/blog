import { Component, OnInit } from '@angular/core';
import { CATEGORIA } from '@constants/index';
import { postActual } from '@shared/constants';
import { cargarBreadcrumb, cargarIndice } from '@shared/constants/funciones/funciones-globales';
import { CategoriaModel } from '@shared/models';
import { CategoriaPostModel, DatosPost } from '@shared/models/categorias.model';
import { IndiceDeContenidosModel } from '@shared/models/indice.model';
import { NG_GH_PAGES, NG_GH_PAGES_AGREGAR_LIBERIA, NG_GH_PAGES_CONSTRUIR_PROYECTO, NG_GH_PAGES_PRIMER_COMMIT, NG_GH_PAGES_SUBIR_COMPILADO } from './constants/ng-gh-pages.constant';

@Component({
  selector: 'app-ng-gh-pages',
  templateUrl: './ng-gh-pages.component.html',
  styleUrls: ['./ng-gh-pages.component.css']
})
export class NgGhPagesComponent implements OnInit {

  public idPublicacion = '306dc20e-eee2-43de-8f2a-c69f0acd9f82';
  public indiceTypescript: IndiceDeContenidosModel [] = [];
  public publicacion = new DatosPost();
  public categoria = new CategoriaPostModel();
  public breadcrumb = new CategoriaModel();
  public nuevoProyectoAngular = NG_GH_PAGES;
  public agregarLibreria = NG_GH_PAGES_AGREGAR_LIBERIA;
  public construirProyecto = NG_GH_PAGES_CONSTRUIR_PROYECTO;
  public subirCompilado = NG_GH_PAGES_SUBIR_COMPILADO;
  public primerCommit = NG_GH_PAGES_PRIMER_COMMIT;

  public imageUrl = 'https://plantillas_dev.gitlab.io/assets/img/posts/angular/nuevoRepo.png';

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
