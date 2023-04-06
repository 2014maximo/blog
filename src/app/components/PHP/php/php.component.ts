import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../shared/models/post.model';
import { IndiceDeContenidosModel } from '../../../shared/models/indice.model';

@Component({
  selector: 'app-php',
  templateUrl: './php.component.html',
  styleUrls: ['./php.component.css']
})
export class PhpComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
  }

  public indicePhp: IndiceDeContenidosModel [] = [];
  public clasePhp = '';

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/categorias/php.png',
      fondo: true,
      tituloPost: '',
      alturaImagen: '150',
      sombra: 'drop'
    };

    this.clasePhp = 'mt-2';

    this.indicePhp = [
      {
        nombre: 'PHP INSTALACION',
        posicion: 'pos-z',
        ruta: 'php-instalacion',
        colorFondo: 'bg-Php',
        color: 'text-light',
        estado: 'inactivo'
      },
      {
        nombre: 'PHP DESCRIPCION ELEMENTOS',
        posicion: 'pos-z',
        ruta: 'php-elementos',
        colorFondo: 'bg-Php',
        color: 'text-light',
        estado: 'activo'
      }
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
