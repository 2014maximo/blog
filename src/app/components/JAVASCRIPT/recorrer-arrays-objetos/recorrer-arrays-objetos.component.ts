import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';

@Component({
  selector: 'app-recorrer-arrays-objetos',
  templateUrl: './recorrer-arrays-objetos.component.html',
  styleUrls: ['./recorrer-arrays-objetos.component.css']
})
export class RecorrerArraysObjetosComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: ''
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
      tituloPost: 'RECORRER ARRAYS Y OBJETOS',
      alturaImagen: ''
    };
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
