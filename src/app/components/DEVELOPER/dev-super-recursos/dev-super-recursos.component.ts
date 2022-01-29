import { Component, OnInit } from '@angular/core';
import { LINKS } from 'src/app/constants/super-recursos.contant';
import { BloqueContenidoModel } from '../../../models/bloque-contenidos.model';
import { IndiceDeContenidosModel } from '../../../models/indice.model';
import { HeaderPostModel } from '../../../models/post.model';

@Component({
  selector: 'app-dev-super-recursos',
  templateUrl: './dev-super-recursos.component.html',
  styles: [
  ]
})
export class DevSuperRecursosComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: ''
  }
  
  public pasoDeIndice: IndiceDeContenidosModel [] = []
  public pasoBloques: BloqueContenidoModel [] = [];
  public claseContenedor: string = '';


  constructor() { 
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/banner/recursos.jpg',
      fondo: false,
      tituloPost: 'SUPER RECURSOS DE INTERNET',
      alturaImagen: ''
    };
    this.claseContenedor = 'mt-5'

    this.pasoDeIndice = [
      {
        nombre: 'REDES SOCIALES',
        posicion: 'pos-z',
        ruta: 'redes',
        fondo: 'bg-light',
        colorTexto: 't2',
        activo: true
      },
      {
        nombre: 'REDES DEV',
        posicion: 'rot-2',
        ruta: 'redes-dev',
        fondo: 'bg-light',
        colorTexto: 't2',
        activo: true
      },
      {
        nombre: 'GOOGLE AVANZADOS',
        posicion: 'rot-1',
        ruta: 'google-avanzados',
        fondo: 'bg-light',
        colorTexto: 't2',
        activo: true
      },
      {
        nombre: 'HERRAMIENTAS DESARROLLO...',
        posicion: 'bg-dark',
        ruta: 'herramientas-desarrollo',
        fondo: 'bg-light',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'DISEÑO - ESTILO - WEB',
        posicion: 'rot-1',
        ruta: 'diseno-estilo',
        fondo: 'bg-light',
        colorTexto: 't2',
        activo: true
      },
      {
        nombre: 'PHP Y WORDPRESS',
        posicion: 'pos-z',
        ruta: 'php-wordpress',
        fondo: 'bg-light',
        colorTexto: 't2',
        activo: true
      },
      {
        nombre: 'CSS',
        posicion: 'rot-2',
        ruta: 'css',
        fondo: 'bg-light',
        colorTexto: 't2',
        activo: true
      },
      {
        nombre: 'LIBRERÍAS Y FRAMEWORKS',
        posicion: 'pos-z',
        ruta: 'librerias-frameworks',
        fondo: 'bg-Angular',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'EDITORES ONLINE',
        posicion: 'pos-z',
        ruta: 'editores-online',
        fondo: 'bg-light',
        colorTexto: 't2',
        activo: true
      },
      {
        nombre: 'PLATAFORMAS APRENDIZAJE',
        posicion: 'pos-z',
        ruta: 'plataformas-aprendizaje',
        fondo: 'bg-Flutter',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'RECURSOS Y DOCUMENTACIÓN',
        posicion: 'rot-1',
        ruta: 'recursos',
        fondo: 'bg-light',
        colorTexto: 't2',
        activo: true
      },
      {
        nombre: 'PROGRAMAS Y DESCARGAS',
        posicion: 'pos-z',
        ruta: 'programas',
        fondo: 'bg-Android',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'LINUX',
        posicion: 'pos-z',
        ruta: 'linux',
        fondo: 'bg-light',
        colorTexto: 't2',
        activo: true
      },
      {
        nombre: 'COMERCIO',
        posicion: 'pos-z',
        ruta: 'comercio',
        fondo: 'bg-secondary',
        colorTexto: 'text-warning',
        activo: true
      },
      {
        nombre: 'LIBROS',
        posicion: 'rot-1',
        ruta: 'libros',
        fondo: 'bg-light',
        colorTexto: 't2',
        activo: true
      },
      {
        nombre: 'ALMACENAMIENTO',
        posicion: 'rot-3',
        ruta: 'almacenamiento',
        fondo: 'bg-light',
        colorTexto: 't2',
        activo: true
      },
      {
        nombre: 'TRADUCTORES',
        posicion: 'pos-z',
        ruta: 'traductores',
        fondo: 'bg-light',
        colorTexto: 't2',
        activo: true
      },
      {
        nombre: 'SENA',
        posicion: 'rot-3',
        ruta: 'sena',
        fondo: 'bg-light',
        colorTexto: 't2',
        activo: true
      },
      {
        nombre: 'LEGALES',
        posicion: 'pos-z',
        ruta: 'legales',
        fondo: 'bg-Javascript',
        colorTexto: 't2',
        activo: true
      },
      {
        nombre: 'PAGOS',
        posicion: 'rot-3',
        ruta: 'pagos',
        fondo: 'bg-light',
        colorTexto: 't2',
        activo: true
      },
      {
        nombre: 'VIDEOS Y PELÍCULAS',
        posicion: 'rot-3',
        ruta: 'videos-peliculas',
        fondo: 'bg-Git',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'JUEGOS',
        posicion: 'rot-3',
        ruta: 'juegos',
        fondo: 'bg-Linux',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'UTILIDADES',
        posicion: 'rot-3',
        ruta: 'utilidades',
        fondo: 'bg-Light',
        colorTexto: 'text-light',
        activo: true
      },
    ]

    this.pasoBloques = LINKS;
  }

  public scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
