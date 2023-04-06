import { Component, OnInit } from '@angular/core';
import { CategoriaModel, HeaderPostModel } from '../../../shared/models/post.model';
import { repositorioContenidoImagenes } from '../../../constants/generales/globales.constant';

@Component({
  selector: 'app-js-typescript-elementos',
  templateUrl: './js-typescript-elementos.component.html',
  styles: [
  ]
})
export class JsTypescriptElementosComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
  }
  public rutaImagen: string = '';

  public breadcrumb: CategoriaModel = {
    activo: true,
    categoria: 'JAVASCRIPT',
    colorText: 'tc-yellow-one',
    ruta: 'javascript'
  }

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/icons/typescript.png',
      fondo: true,
      tituloPost: 'ELEMENTOS',
      alturaImagen: '100',
      sombra: 'drop'
    };

    this.rutaImagen = repositorioContenidoImagenes;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
