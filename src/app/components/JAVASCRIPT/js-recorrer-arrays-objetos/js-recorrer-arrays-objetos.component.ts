import { Component, OnInit } from '@angular/core';
import { repositorioContenidoImagenes } from 'src/app/constants/globales.constant';
import { HeaderPostModel, CategoriaModel } from '../../../models/post.model';

@Component({
  selector: 'app-js-recorrer-arrays-objetos',
  templateUrl: './js-recorrer-arrays-objetos.component.html',
  styleUrls: ['./js-recorrer-arrays-objetos.component.css']
})
export class JsRecorrerArraysObjetosComponent implements OnInit {

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
      rutaImagen: 'assets/img/categorias/javascript.png',
      fondo: true,
      tituloPost: 'ELEMENTOS',
      alturaImagen: '150',
      sombra: 'drop'
    };

    this.rutaImagen = repositorioContenidoImagenes;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
