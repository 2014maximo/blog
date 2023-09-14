import { Component, OnInit } from '@angular/core';
import { HeaderPostModel, CategoriaModel } from '../../../../shared/models/post.model';

@Component({
  selector: 'app-net-instalacion',
  templateUrl: './net-instalacion.component.html',
  styleUrls: ['./net-instalacion.component.css']
})
export class NetInstalacionComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: ''
  }

  public breadcrumb: CategoriaModel = {
    activo: true,
    categoria: 'NET',
    colorText: 'tc-violet-one',
    ruta: 'net'
  }
  constructor() { }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/banner/Instalaciona-angular.jpg',
      fondo: false,
      tituloPost: 'INSTALACION .NET-FRAMEWORK',
      alturaImagen: ''
    };
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
