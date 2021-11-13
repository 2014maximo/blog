import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';

@Component({
  selector: 'app-dart',
  templateUrl: './dart.component.html',
  styleUrls: ['./dart.component.css']
})
export class DartComponent implements OnInit {

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
      tituloPost: 'DART',
      alturaImagen: ''
    };
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
