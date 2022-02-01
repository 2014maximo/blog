import { Component, OnInit } from '@angular/core';
import { HeaderPostModel, CategoriaModel } from '../../../models/post.model';

@Component({
  selector: 'app-js-elementos',
  templateUrl: './js-elementos.component.html',
  styleUrls: ['./js-elementos.component.css']
})
export class JsElementosComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
  }

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

  inicializarVariables() {

    this.cabeceraPost = {
      rutaImagen: 'assets/img/categorias/javascript.png',
      fondo: true,
      tituloPost: 'ELEMENTOS',
      alturaImagen: '300'
    };
  }
  
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
