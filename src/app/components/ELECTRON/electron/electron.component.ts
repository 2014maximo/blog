import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../shared/models/post.model';
import { IndiceDeContenidosModel } from '../../../shared/models/indice.model';

@Component({
  selector: 'app-electron',
  templateUrl: './electron.component.html',
  styleUrls: ['./electron.component.css']
})
export class ElectronComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: ''
  }

  public indiceElectron: IndiceDeContenidosModel [] = [];
  public claseElectron = '';

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/categorias/electron.png',
      fondo: true,
      tituloPost: '',
      alturaImagen: '150',
      sombra: 'drop'
    };

    this.claseElectron = 'mt-2';

    this.indiceElectron = [
      {
        nombre: 'INSTALACIÓN',
        posicion: 'pos-z',
        ruta: 'android-instalacion',
        colorFondo: 'bg-Electron border border-dark',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'ELEMENTOS Y DESCRIPCIÓN',
        posicion: 'rot-2',
        ruta: 'android-elementos',
        colorFondo: 'bg-Electron border border-dark',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'CRUD',
        posicion: 'rot-2',
        ruta: 'android-elementos',
        colorFondo: 'bg-Electron border border-dark',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'TERMINOS AVANZADOS',
        posicion: 'rot-2',
        ruta: 'android-elementos',
        colorFondo: 'bg-Electron border border-dark',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'PRUEBAS UNITARIAS',
        posicion: 'rot-2',
        ruta: 'android-elementos',
        colorFondo: 'bg-Electron border border-dark',
        color: 't2',
        estado: 'activo'
      },
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
