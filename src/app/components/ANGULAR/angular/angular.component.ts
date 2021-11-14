import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { IndiceDeContenidosModel } from '../../../models/indice.model';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
  }

  public indiceAngular: IndiceDeContenidosModel [] = [];
  public indiceIonic: IndiceDeContenidosModel [] = [];
  public indicePrime: IndiceDeContenidosModel [] = [];
  public claseAngular = '';

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {

    this.cabeceraPost = {
      rutaImagen: 'assets/img/icons/Angular.png',
      fondo: true,
      tituloPost: 'ANGULAR',
      alturaImagen: '300',
      sombra: 'drop'
    };
    this.claseAngular = 'mt-5';
    this.indiceAngular = [
      {
        nombre: 'INSTALACIÓN',
        posicion: 'pos-z',
        rutaExterna: 'angular-instalacion',
        fondo: 'bg-Angular',
        colorTexto: 'text-light'
      },
      {
        nombre: 'ELEMENTOS Y DESCRIPCIÓN',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Angular',
        colorTexto: 'text-light'
      },
    ]

    this.indiceIonic = [
      {
        nombre: 'INSTALACIÓN',
        posicion: 'pos-z',
        rutaExterna: 'android-instalacion',
        fondo: 'bg-Ionic',
        colorTexto: 'text-light'
      },
      {
        nombre: 'ELEMENTOS Y DESCRIPCIÓN',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Ionic',
        colorTexto: 'text-light'
      },
    ]

    this.indicePrime = [
      {
        nombre: 'INSTALACIÓN',
        posicion: 'pos-z',
        rutaExterna: 'android-instalacion',
        fondo: 'bg-Prime',
        colorTexto: 'text-light'
      },
      {
        nombre: 'ELEMENTOS Y DESCRIPCIÓN',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Prime',
        colorTexto: 'text-light'
      },
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }


}
