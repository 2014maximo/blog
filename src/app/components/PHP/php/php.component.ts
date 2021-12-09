import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { IndiceDeContenidosModel } from '../../../models/indice.model';

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
        rutaExterna: 'php-instalacion',
        fondo: 'bg-Php',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'PHP DESCRIPCION ELEMENTOS',
        posicion: 'pos-z',
        rutaExterna: 'net-descripcion-elementos',
        fondo: 'bg-Php',
        colorTexto: 'text-light',
        activo: true
      }
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
