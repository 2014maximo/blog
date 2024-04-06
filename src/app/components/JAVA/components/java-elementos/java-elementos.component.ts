import { Component, OnInit } from '@angular/core';
import { CATEGORIA } from '@constants/index';
import { postActual } from '@shared/constants';
import { cargarBreadcrumb, cargarIndice } from '@shared/constants/funciones/funciones-globales';
import { CategoriaModel } from '@shared/models';
import { CategoriaPostModel, DatosPost } from '@shared/models/categorias.model';

@Component({
  selector: 'app-java-elementos',
  templateUrl: './java-elementos.component.html',
  styleUrls: ['./java-elementos.component.css']
})
export class JavaElementosComponent implements OnInit {

  public idPublicacion = '14adc124-a3ad-4b92-a56d-06b069dcdd8c';
  public breadcrumb = new CategoriaModel();
  public categoria = new CategoriaPostModel();
  public publicacion = new DatosPost();

  constructor() { }

  ngOnInit(): void {
    this.publicacion = postActual(this.idPublicacion)[0];
    this.categoria = CATEGORIA.filter( e => e.nombre === this.publicacion.categoria)[0];
    this.breadcrumb = cargarBreadcrumb(this.publicacion);
  }

  public scroll(el: HTMLElement){
    el.scrollIntoView();
  }

}
