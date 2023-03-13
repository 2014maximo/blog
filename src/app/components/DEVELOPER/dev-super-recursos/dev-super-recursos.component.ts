import { Component, OnInit } from '@angular/core';
import { LINKS } from 'src/app/constants/super-recursos.contant';
import { BloqueContenidoModel } from '../../../models/bloque-contenidos.model';
import { IndiceDeContenidosModel } from '../../../models/indice.model';
import { HeaderPostModel, CategoriaModel } from '../../../models/post.model';

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
  public breadcrumb: CategoriaModel = {
    activo: true,
    categoria: 'DEVELOPER',
    colorText: 'tc-yellow-one',
    ruta: 'developer'
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
        colorFondo: 'bg-light',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'REDES DEV',
        posicion: 'rot-2',
        ruta: 'redes-dev',
        colorFondo: 'bg-light',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'GOOGLE AVANZADOS',
        posicion: 'rot-1',
        ruta: 'google-avanzados',
        colorFondo: 'bg-light',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'HERRAMIENTAS DESARROLLO...',
        posicion: 'bg-dark',
        ruta: 'herramientas-desarrollo',
        colorFondo: 'bg-light',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'DISEÑO - ESTILO - WEB',
        posicion: 'rot-1',
        ruta: 'diseno-estilo',
        colorFondo: 'bg-light',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'HOSTINGS - DOMINIOS - SERVIDORES',
        posicion: 'rot-2',
        ruta: 'hostings-dominios-servidores',
        colorFondo: 'bg-light',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'PHP Y WORDPRESS',
        posicion: 'pos-z',
        ruta: 'php-wordpress',
        colorFondo: 'bg-light',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'CSS',
        posicion: 'rot-2',
        ruta: 'css',
        colorFondo: 'bg-light',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'LIBRERÍAS Y FRAMEWORKS',
        posicion: 'pos-z',
        ruta: 'librerias-frameworks',
        colorFondo: 'bg-Angular',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'EDITORES ONLINE',
        posicion: 'pos-z',
        ruta: 'editores-online',
        colorFondo: 'bg-light',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'PLATAFORMAS APRENDIZAJE',
        posicion: 'pos-z',
        ruta: 'plataformas-aprendizaje',
        colorFondo: 'bg-Flutter',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'RECURSOS Y DOCUMENTACIÓN',
        posicion: 'rot-1',
        ruta: 'recursos',
        colorFondo: 'bg-light',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'PROGRAMAS Y DESCARGAS',
        posicion: 'pos-z',
        ruta: 'programas',
        colorFondo: 'bg-Android',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'LINUX',
        posicion: 'pos-z',
        ruta: 'linux',
        colorFondo: 'bg-light',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'COMERCIO',
        posicion: 'pos-z',
        ruta: 'comercio',
        colorFondo: 'bg-secondary',
        color: 'text-warning',
        estado: 'activo'
      },
      {
        nombre: 'LIBROS',
        posicion: 'rot-1',
        ruta: 'libros',
        colorFondo: 'bg-light',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'ALMACENAMIENTO',
        posicion: 'rot-3',
        ruta: 'almacenamiento',
        colorFondo: 'bg-light',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'TRADUCTORES',
        posicion: 'pos-z',
        ruta: 'traductores',
        colorFondo: 'bg-light',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'SENA',
        posicion: 'rot-3',
        ruta: 'sena',
        colorFondo: 'bg-light',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'LEGALES',
        posicion: 'pos-z',
        ruta: 'legales',
        colorFondo: 'bg-Javascript',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'PAGOS',
        posicion: 'rot-3',
        ruta: 'pagos',
        colorFondo: 'bg-light',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'VIDEOS Y AUDIO',
        posicion: 'rot-3',
        ruta: 'videos-peliculas',
        colorFondo: 'bg-Git',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'JUEGOS',
        posicion: 'rot-3',
        ruta: 'juegos',
        colorFondo: 'bg-Linux',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'UTILIDADES',
        posicion: 'rot-3',
        ruta: 'utilidades',
        colorFondo: 'bg-Light',
        color: 'text-light',
        estado: 'activo'
      },
    ]

    this.pasoBloques = LINKS;
  }

  public scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
