import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../shared/models/post.model';
import { IndiceDeContenidosModel } from '../../../shared/models/indice.model';

@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.component.html',
  styleUrls: ['./wordpress.component.css']
})
export class WordpressComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
  }

  public indiceWordpress: IndiceDeContenidosModel [] = [];
  public claseWordpress = '';

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/categorias/wordpress2.png',
      fondo: true,
      tituloPost: '',
      alturaImagen: '150',
      sombra: 'drop'
    };

    this.claseWordpress = 'mt-2';

    this.indiceWordpress = [
      {
        nombre: 'INSTALACION',
        posicion: 'pos-z',
        ruta: 'wdps-instalacion',
        colorFondo: 'bg-Wordpress',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'DESCRIPCIÓN ELEMENTOS',
        posicion: 'pos-z',
        ruta: 'sql-modelo-relacional-entidad-relacion',
        colorFondo: 'bg-Wordpress',
        color: 'text-light',
        estado: 'activo'
      }
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
