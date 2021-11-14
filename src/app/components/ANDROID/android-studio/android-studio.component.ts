import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { IndiceDeContenidosModel } from '../../../models/indice.model';

@Component({
  selector: 'app-android-studio',
  templateUrl: './android-studio.component.html',
  styleUrls: ['./android-studio.component.css']
})
export class AndroidStudioComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: ''
  }

  public pasoDeIndice: IndiceDeContenidosModel [] = []

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {

    this.cabeceraPost = {
      rutaImagen: 'assets/img/banner/android-studio-robot.png',
      fondo: false,
      tituloPost: 'ANDROID STUDIO',
      alturaImagen: ''
    };
    this.pasoDeIndice = [
      {
        nombre: 'INSTALACIÓN',
        posicion: 'pos-z',
        rutaExterna: 'android-instalacion',
        fondo: 'bg-light',
        colorTexto: 't2'
      },
      {
        nombre: 'ELEMENTOS Y DESCRIPCIÓN',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-light',
        colorTexto: 't2'
      },
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
