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
        ruta: 'ng-instalacion',
        colorFondo: 'bg-Angular',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'ELEMENTOS Y DESCRIPCIÓN',
        posicion: 'pos-z',
        ruta: 'ng-descripcion-elementos',
        colorFondo: 'bg-Angular',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'PRUEBAS UNITARIAS',
        posicion: 'rot-2',
        ruta: 'ng-pruebas-unitarias',
        colorFondo: 'bg-Angular',
        color: 'text-light',
        estado: 'inactivo'
      },
      {
        nombre: 'COMUNICACION ENTRE COMPONENTES',
        posicion: 'rot-3',
        ruta: 'ng-comunicacion-componente',
        colorFondo: 'bg-Angular',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'CRUD CON MOCKDATA',
        posicion: 'pos-z',
        ruta: 'android-elementos',
        colorFondo: 'bg-Angular',
        color: 'text-light',
        estado: 'inactivo'
      },
      {
        nombre: 'RXJS',
        posicion: 'rot-2',
        ruta: 'android-elementos',
        colorFondo: 'bg-Angular',
        color: 'text-light',
        estado: 'inactivo'
      },
      {
        nombre: 'MICROFRONTENDS',
        posicion: 'pos-z',
        ruta: 'android-elementos',
        colorFondo: 'bg-Angular',
        color: 'text-light',
        estado: 'inactivo'
      },
      {
        nombre: 'DESPLEGAR EN GITHUB',
        posicion: 'pos-z',
        ruta: 'android-elementos',
        colorFondo: 'bg-Angular',
        color: 'text-light',
        estado: 'inactivo'
      },
      {
        nombre: 'REDUX',
        posicion: 'pos-z',
        ruta: 'android-elementos',
        colorFondo: 'bg-Angular',
        color: 'text-light',
        estado: 'inactivo'
      },
      {
        nombre: 'MÉTODO DEL BARRIL',
        posicion: 'rot-1',
        ruta: 'android-elementos',
        colorFondo: 'bg-Angular',
        color: 'text-light',
        estado: 'inactivo'
      },
      {
        nombre: 'TIEPO REAL SOCKET Y REST',
        posicion: 'rot-2',
        ruta: 'android-elementos',
        colorFondo: 'bg-Angular',
        color: 'text-light',
        estado: 'inactivo'
      },
      {
        nombre: 'DEBUGGEAR EN CHROME',
        posicion: 'pos-z',
        ruta: 'android-elementos',
        colorFondo: 'bg-Angular',
        color: 'text-light',
        estado: 'inactivo'
      },
      {
        nombre: 'CABECERAS CORS',
        posicion: 'pos-z',
        ruta: 'ng-cors',
        colorFondo: 'bg-Angular',
        color: 'text-light',
        estado: 'inactivo'
      },
    ]

    this.indiceIonic = [
      {
        nombre: 'INSTALACIÓN',
        posicion: 'pos-z',
        ruta: 'android-instalacion',
        colorFondo: 'bg-Ionic',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'ELEMENTOS Y DESCRIPCIÓN',
        posicion: 'rot-2',
        ruta: 'android-elementos',
        colorFondo: 'bg-Ionic',
        color: 'text-light',
        estado: 'activo'
      },
    ]

    this.indicePrime = [
      {
        nombre: 'ELEMENTOS Y DESCRIPCIÓN',
        posicion: 'rot-2',
        ruta: 'prime7-descripcion-elementos',
        colorFondo: 'bg-Prime',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'TABLE CHECKBOX',
        posicion: 'pos-z',
        ruta: 'prime7-tablecheckbox',
        colorFondo: 'bg-Prime',
        color: 'text-light',
        estado: 'activo'
      },
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }


}
