import { Component, OnInit } from '@angular/core';
import { HeaderPostModel, CategoriaModel } from '../../../models/post.model';

@Component({
  selector: 'app-net-descripcion-elementos',
  templateUrl: './net-descripcion-elementos.component.html',
  styleUrls: ['./net-descripcion-elementos.component.css']
})
export class NetDescripcionElementosComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
  }

  public breadcrumb: CategoriaModel = {
    activo: true,
    categoria: 'NET',
    colorText: 'tc-violet-one',
    ruta: 'net'
  }

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: '',
      fondo: true,
      tituloPost: '.NET DESCRIPCIÓN ELEMENTOS',
      alturaImagen: '150',
      sombra: 'drop'
    };
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
