import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';

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

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/categorias/javascript.png',
      fondo: true,
      tituloPost: '',
      alturaImagen: '150',
      sombra: 'drop'
    };
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
