import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../shared/models/post.model';
import { IndiceDeContenidosModel } from '../../../shared/models/indice.model';

@Component({
  selector: 'app-android',
  templateUrl: './android.component.html',
  styles: [
  ]
})
export class AndroidComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: ''
  }
  public clasePaso: string = '';
  public pasoDeIndice: IndiceDeContenidosModel [] = []

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {

    this.cabeceraPost = {
      rutaImagen: 'assets/img/icons/android.png',
      fondo: true,
      tituloPost: 'ANDROID',
      alturaImagen: '150',
      sombra: 'drop'
    };
    this.clasePaso = 'mt-5'
    this.pasoDeIndice = [
      {
        nombre: 'ANDROID STUDIO',
        posicion: 'pos-z',
        ruta: 'andr-android-studio',
        colorFondo: 'bg-Android',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'ELEMENTOS Y DESCRIPCIÓN',
        posicion: 'rot-2',
        ruta: 'android-elementos',
        colorFondo: 'bg-Android',
        color: 'text-light',
        estado: 'activo'
      },
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
