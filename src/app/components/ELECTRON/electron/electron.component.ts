import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { IndiceDeContenidosModel } from '../../../models/indice.model';

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
        rutaExterna: 'android-instalacion',
        fondo: 'bg-Electron',
        colorTexto: 't2'
      },
      {
        nombre: 'ELEMENTOS Y DESCRIPCIÓN',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Electron',
        colorTexto: 't2'
      },
      {
        nombre: 'CRUD',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Electron',
        colorTexto: 't2'
      },
      {
        nombre: 'TERMINOS AVANZADOS',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Electron',
        colorTexto: 't2'
      },
      {
        nombre: 'PRUEBAS UNITARIAS',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Electron',
        colorTexto: 't2'
      },
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
