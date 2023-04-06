import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../shared/models/post.model';
import { IndiceDeContenidosModel } from '../../../shared/models/indice.model';

@Component({
  selector: 'app-dart',
  templateUrl: './dart.component.html',
  styleUrls: ['./dart.component.css']
})
export class DartComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: ''
  }

  public indiceDart: IndiceDeContenidosModel [] = [];
  public claseDart = '';

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/categorias/dart_text_white.png',
      fondo: true,
      tituloPost: '',
      alturaImagen: '100',
      sombra: 'drop'
    };

    this.claseDart = 'mt-2';

    this.indiceDart = [
      {
        nombre: 'ELEMENTOS DE DART',
        posicion: 'pos-z',
        ruta: 'dart-elementos',
        colorFondo: 'bg-Dart',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'CRUD',
        posicion: 'rot-2',
        ruta: 'android-elementos',
        colorFondo: 'bg-Dart',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'TERMINOS AVANZADOS',
        posicion: 'rot-2',
        ruta: 'android-elementos',
        colorFondo: 'bg-Dart',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'PRUEBAS UNITARIAS',
        posicion: 'rot-2',
        ruta: 'android-elementos',
        colorFondo: 'bg-Dart',
        color: 'text-light',
        estado: 'activo'
      },
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
