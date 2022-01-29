import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from 'src/app/models/post.model';
import { CategoriaModel } from '../../../models/post.model';

@Component({
  selector: 'app-primeng7-descripcion-elementos',
  templateUrl: './primeng7-descripcion-elementos.component.html',
  styleUrls: ['./primeng7-descripcion-elementos.component.css']
})
export class Primeng7DescripcionElementosComponent implements OnInit {

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
