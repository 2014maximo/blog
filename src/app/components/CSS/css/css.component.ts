import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { IndiceDeContenidosModel } from '../../../models/indice.model';

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
        rutaExterna: 'android-instalacion',
        fondo: 'bg-Css',
        colorTexto: 'text-light'
      },
      {
        nombre: 'HOVER SOBRE IMÁGENES',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Css',
        colorTexto: 'text-light'
      },
      {
        nombre: 'VARIABLES CSS',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Css',
        colorTexto: 'text-light'
      },
      {
        nombre: 'MEDIA QUERIES',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Css',
        colorTexto: 'text-light'
      },
      {
        nombre: 'SLIDER SOLO CON CSS',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Css',
        colorTexto: 'text-light'
      },
      {
        nombre: 'BOTONES REDES',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Css',
        colorTexto: 'text-light'
      },
      {
        nombre: 'MENÚ HAMBURGUESA ANIMADO',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Css',
        colorTexto: 'text-light'
      },
      {
        nombre: 'BOOTSTRAP 4 CLASES MÁS USADAS',
        posicion: 'rot-2',
        rutaExterna: 'css-bootstrap4-clases',
        fondo: 'bg-Css',
        colorTexto: 'text-light',
        activo: true
      },
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
