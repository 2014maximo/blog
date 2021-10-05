import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { IndiceDeContenidosModel } from '../../../models/indice.model';
import { BloqueContenidoModel } from '../../../models/bloque-contenidos.model';
import { LINKS } from '../../../constants/super-recursos.contant';

@Component({
  selector: 'app-super-recursos-internet',
  templateUrl: './super-recursos-internet.component.html',
  styleUrls: ['./super-recursos-internet.component.css']
})
export class SuperRecursosInternetComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: ''
  }
  
  public pasoDeIndice: IndiceDeContenidosModel [] = []

  public pasoBloques: BloqueContenidoModel [] = [];

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

    this.pasoDeIndice = [
      {
        nombre: 'REDES SOCIALES',
        posicion: 'pos-z',
        ruta: 'redes',
        fondo: 'bg-light',
        colorTexto: 't2'
      },
      {
        nombre: 'REDES DEV',
        posicion: 'rot-2',
        ruta: 'redes-dev',
        fondo: 'bg-light',
        colorTexto: 't2'
      },
      {
        nombre: 'GOOGLE AVANZADOS',
        posicion: 'rot-1',
        ruta: 'google-avanzados',
        fondo: 'bg-light',
        colorTexto: 't2'
      },
      {
        nombre: 'HERRAMIENTAS DESARROLLO...',
        posicion: 'bg-dark',
        ruta: 'herramientas-desarrollo',
        fondo: 'bg-light',
        colorTexto: 'text-light'
      },
      {
        nombre: 'DISEÑO - ESTILO - WEB',
        posicion: 'rot-1',
        ruta: 'diseno-estilo',
        fondo: 'bg-light',
        colorTexto: 't2'
      },
      {
        nombre: 'PHP Y WORDPRESS',
        posicion: 'pos-z',
        ruta: 'php-wordpress',
        fondo: 'bg-light',
        colorTexto: 't2'
      },
      {
        nombre: 'CSS',
        posicion: 'rot-2',
        ruta: 'css',
        fondo: 'bg-light',
        colorTexto: 't2'
      },
      {
        nombre: 'LIBRERÍAS Y FRAMEWORKS',
        posicion: 'pos-z',
        ruta: 'head',
        fondo: 'bg-Angular',
        colorTexto: 'text-light'
      },
    ]

    this.pasoBloques = LINKS;
  }

}
