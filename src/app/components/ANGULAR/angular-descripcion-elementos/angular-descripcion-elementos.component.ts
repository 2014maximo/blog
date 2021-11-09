import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';

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
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
