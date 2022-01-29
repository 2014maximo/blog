import { Component, OnInit } from '@angular/core';
import { HeaderPostModel, CategoriaModel } from '../../../models/post.model';

@Component({
  selector: 'app-prime7-tablecheckbox',
  templateUrl: './prime7-tablecheckbox.component.html',
  styles: [
  ]
})
export class Prime7TablecheckboxComponent implements OnInit {

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

  constructor() {
    this.inicializarVariables();
  }
  
  ngOnInit(): void {
  }
  
  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/banner/Instalaciona-angular.jpg',
      fondo: false,
      tituloPost: 'PRIME NG 7.2.6 lts DESCRIPCIÓN ELEMENTOS',
      alturaImagen: ''
    };
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}
