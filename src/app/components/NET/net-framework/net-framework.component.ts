import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { IndiceDeContenidosModel } from '../../../models/indice.model';

@Component({
  selector: 'app-net-framework',
  templateUrl: './net-framework.component.html',
  styleUrls: ['./net-framework.component.css']
})
export class NetFrameworkComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
  }

  public indiceNetFramework: IndiceDeContenidosModel [] = [];
  public claseNetFramework = '';

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/categorias/net-framework.png',
      fondo: true,
      tituloPost: '',
      alturaImagen: '150',
      sombra: 'drop'
    };

    this.claseNetFramework = 'mt-2';

    this.indiceNetFramework = [
      {
        nombre: 'NET INSTALACION',
        posicion: 'pos-z',
        ruta: 'net-instalacion',
        colorFondo: 'bg-NetFramework',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'NET DESCRIPCION ELEMENTOS',
        posicion: 'pos-z',
        ruta: 'net-descripcion-elementos',
        colorFondo: 'bg-NetFramework',
        color: 'text-light',
        estado: 'activo'
      }
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
