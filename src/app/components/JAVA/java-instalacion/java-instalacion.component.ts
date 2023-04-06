import { Component, OnInit } from '@angular/core';
import { HeaderPostModel, CategoriaModel } from '../../../shared/models/post.model';

@Component({
  selector: 'app-java-instalacion',
  templateUrl: './java-instalacion.component.html',
  styleUrls: ['./java-instalacion.component.css']
})
export class JavaInstalacionComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
  }

  public breadcrumb: CategoriaModel = {
    activo: true,
    categoria: 'JAVA',
    colorText: 'tc-red-one',
    ruta: 'java'
  }

  constructor() {
    this.inicializarVariables();
  }
  
  ngOnInit(): void {
  }

  inicializarVariables() {

    this.cabeceraPost = {
      rutaImagen: 'assets/img/categorias/logo-java.png',
      fondo: true,
      tituloPost: 'INSTALACIÓN',
      alturaImagen: '300'
    };
  }
  
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
