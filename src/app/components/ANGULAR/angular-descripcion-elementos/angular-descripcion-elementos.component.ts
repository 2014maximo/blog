import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { IndiceDeContenidosModel } from '../../../models/indice.model';

@Component({
  selector: 'app-angular-descripcion-elementos',
  templateUrl: './angular-descripcion-elementos.component.html',
  styleUrls: ['./angular-descripcion-elementos.component.css']
})
export class AngularDescripcionElementosComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: ''
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
        fondo: 'bg-light',
        colorTexto: 't2',
        activo: true
      },
      {
        nombre: 'PATRÓN MVC',
        posicion: 'rot-3',
        ruta: 'patron-mvc',
        fondo: 'bg-light',
        colorTexto: 't2',
        activo: true
      },
      {
        nombre: 'URL FRAGMENTS',
        posicion: 'rot-2',
        ruta: 'url-fragments',
        fondo: 'bg-light',
        colorTexto: 't2',
        activo: true
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
