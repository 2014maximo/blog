import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { IndiceDeContenidosModel } from '../../../models/indice.model';

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
        nombre: 'INSTALACIÓN',
        posicion: 'pos-z',
        rutaExterna: 'android-instalacion',
        fondo: 'bg-Dart',
        colorTexto: 'text-light'
      },
      {
        nombre: 'ELEMENTOS Y DESCRIPCIÓN',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Dart',
        colorTexto: 'text-light'
      },
      {
        nombre: 'CRUD',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Dart',
        colorTexto: 'text-light'
      },
      {
        nombre: 'TERMINOS AVANZADOS',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Dart',
        colorTexto: 'text-light'
      },
      {
        nombre: 'PRUEBAS UNITARIAS',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Dart',
        colorTexto: 'text-light'
      },
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
