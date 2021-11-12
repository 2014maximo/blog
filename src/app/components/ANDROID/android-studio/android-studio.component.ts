import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';

@Component({
  selector: 'app-android-studio',
  templateUrl: './android-studio.component.html',
  styleUrls: ['./android-studio.component.css']
})
export class AndroidStudioComponent implements OnInit {

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
      tituloPost: 'ANDROID STUDIO',
      alturaImagen: ''
    };
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
