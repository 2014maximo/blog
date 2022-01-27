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
      tituloPost: 'ANDROID STUDIO',
      alturaImagen: '150',
      sombra: 'drop'
    };
    this.clasePaso = 'mt-5'
    this.pasoDeIndice = [
      {
        nombre: 'INSTALACIÓN',
        posicion: 'pos-z',
        rutaExterna: 'as-instalacion',
        fondo: 'bg-Android',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'ELEMENTOS Y DESCRIPCIÓN',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Android',
        colorTexto: 'text-light'
      },
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
