import { Component, OnInit } from '@angular/core';
import { HeaderPostModel, CategoriaModel } from '../../../models/post.model';
import { IndiceDeContenidosModel } from '../../../models/indice.model';

@Component({
  selector: 'app-ng-descripcion-elementos',
  templateUrl: './ng-descripcion-elementos.component.html',
  styleUrls: ['./ng-descripcion-elementos.component.css']
})
export class NgDescripcionElementosComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: ''
  }

  public breadcrumb: CategoriaModel = {
    activo: true,
    categoria: 'ANGULAR',
    colorText: 'tc-red-one',
    ruta: 'angular'
  }
  public claseContenedor: string = '';
  public pasoDeIndice: IndiceDeContenidosModel [] = []

  constructor() {
    this.inicializarVariables()
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/banner/Instalaciona-angular.jpg',
      fondo: false,
      tituloPost: 'ANGULAR DESCRIPCIÓN ELEMENTOS',
      alturaImagen: ''
    };

    this.pasoDeIndice = [
      {
        nombre: 'PATRÓN SPA',
        posicion: 'pos-z',
        ruta: 'patron-spa',
        colorFondo: 'bg-light',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'PATRÓN MVC',
        posicion: 'rot-3',
        ruta: 'patron-mvc',
        colorFondo: 'bg-light',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'URL FRAGMENTS',
        posicion: 'rot-2',
        ruta: 'url-fragments',
        colorFondo: 'bg-light',
        color: 't2',
        estado: 'activo'
      },
    ]
    this.claseContenedor = 'mt-5';
  }

  public navegar(ulr: string){
    window.open(ulr, "_blank");
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
