import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../shared/models/post.model';
import { IndiceDeContenidosModel } from '../../../shared/models/indice.model';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
  }

  public indiceCss: IndiceDeContenidosModel [] = [];
  public claseCss = '';

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {

    this.cabeceraPost = {
      rutaImagen: 'assets/img/categorias/css.png',
      fondo: true,
      tituloPost: '',
      alturaImagen: '300',
      sombra: 'drop'
    };

    this.claseCss = 'mt-2';

    this.indiceCss = [
      {
        nombre: 'ATRIBUTOS CSS',
        posicion: 'pos-z',
        ruta: 'android-instalacion',
        colorFondo: 'bg-Css',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'HOVER SOBRE IMÁGENES',
        posicion: 'rot-2',
        ruta: 'android-elementos',
        colorFondo: 'bg-Css',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'VARIABLES CSS',
        posicion: 'rot-2',
        ruta: 'android-elementos',
        colorFondo: 'bg-Css',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'MEDIA QUERIES',
        posicion: 'rot-2',
        ruta: 'android-elementos',
        colorFondo: 'bg-Css',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'SLIDER SOLO CON CSS',
        posicion: 'rot-2',
        ruta: 'android-elementos',
        colorFondo: 'bg-Css',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'BOTONES REDES',
        posicion: 'rot-2',
        ruta: 'android-elementos',
        colorFondo: 'bg-Css',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'MENÚ HAMBURGUESA ANIMADO',
        posicion: 'rot-2',
        ruta: 'android-elementos',
        colorFondo: 'bg-Css',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'BOOTSTRAP 4 CLASES MÁS USADAS',
        posicion: 'rot-2',
        ruta: 'css-bootstrap4-clases',
        colorFondo: 'bg-Css',
        color: 'text-light',
        estado: 'activo'
      },
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
