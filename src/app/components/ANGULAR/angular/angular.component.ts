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

    this.claseAngular = 'mt-2';

    this.indiceAngular = [
      {
        nombre: 'INSTALACIÓN',
        posicion: 'pos-z',
        rutaExterna: 'ng-instalacion',
        fondo: 'bg-Angular',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'ELEMENTOS Y DESCRIPCIÓN',
        posicion: 'pos-z',
        rutaExterna: 'ng-descripcion-elementos',
        fondo: 'bg-Angular',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'PRUEBAS UNITARIAS',
        posicion: 'rot-2',
        rutaExterna: 'ng-pruebas-unitarias',
        fondo: 'bg-Angular',
        colorTexto: 'text-light',
        activo: false
      },
      {
        nombre: 'COMUNICACION ENTRE COMPONENTES',
        posicion: 'rot-3',
        rutaExterna: 'ng-comunicacion-componente',
        fondo: 'bg-Angular',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'CRUD CON MOCKDATA',
        posicion: 'pos-z',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Angular',
        colorTexto: 'text-light',
        activo: false
      },
      {
        nombre: 'RXJS',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Angular',
        colorTexto: 'text-light',
        activo: false
      },
      {
        nombre: 'MICROFRONTENDS',
        posicion: 'pos-z',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Angular',
        colorTexto: 'text-light',
        activo: false
      },
      {
        nombre: 'DESPLEGAR EN GITHUB',
        posicion: 'pos-z',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Angular',
        colorTexto: 'text-light',
        activo: false
      },
      {
        nombre: 'REDUX',
        posicion: 'pos-z',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Angular',
        colorTexto: 'text-light',
        activo: false
      },
      {
        nombre: 'MÉTODO DEL BARRIL',
        posicion: 'rot-1',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Angular',
        colorTexto: 'text-light',
        activo: false
      },
      {
        nombre: 'TIEPO REAL SOCKET Y REST',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Angular',
        colorTexto: 'text-light',
        activo: false
      },
      {
        nombre: 'DEBUGGEAR EN CHROME',
        posicion: 'pos-z',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Angular',
        colorTexto: 'text-light',
        activo: false
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
        nombre: 'ELEMENTOS Y DESCRIPCIÓN',
        posicion: 'rot-2',
        rutaExterna: 'prime7-descripcion-elementos',
        fondo: 'bg-Prime',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'TABLE CHECKBOX',
        posicion: 'pos-z',
        rutaExterna: 'prime7-tablecheckbox',
        fondo: 'bg-Prime',
        colorTexto: 'text-light',
        activo: true
      },
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }


}
