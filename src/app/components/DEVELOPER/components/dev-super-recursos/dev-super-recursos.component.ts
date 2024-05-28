import { Component, OnInit } from '@angular/core';
import { LINKS } from '@components/DEVELOPER/components/dev-super-recursos/constants/super-recursos.contant';
import { BloqueContenidoModel } from '../../../../shared/models/bloque-contenidos.model';
import { IndiceDeContenidosModel } from '../../../../shared/models/indice.model';
import { HeaderPostModel, CategoriaModel } from '../../../../shared/models/post.model';
import { INDICE_S_RECURSOS } from './constants/indices.constant';

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
  public pasoDeIndice: IndiceDeContenidosModel [] = [];
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

    this.pasoDeIndice = INDICE_S_RECURSOS;

    this.pasoBloques = LINKS;
  }

  public scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
