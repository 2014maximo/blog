import { Component, OnInit } from '@angular/core';
import { CategoriaModel, HeaderPostModel } from '../../../shared/models/post.model';
import { repositorioContenidoImagenes } from '../../../constants/generales/globales.constant';

@Component({
  selector: 'app-dev-controles-visual-studio-code',
  templateUrl: './dev-controles-visual-studio-code.component.html',
  styleUrls: ['./dev-controles-visual-studio-code.component.css']
})
export class DevControlesVisualStudioCodeComponent implements OnInit {

  public breadcrumb: CategoriaModel = {
    activo: true,
    categoria: 'DEVELOPER',
    colorText: 'tc-yellow-one',
    ruta: 'developer'
  }

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
  }
  public rutaExternaImagenes: string = ''
  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/icons/microsoft_sqlserver.png',
      fondo: true,
      tituloPost: 'DESCRIPCIÓN QUERYS',
      alturaImagen: '150',
      sombra: 'drop'
    };
    this.rutaExternaImagenes = repositorioContenidoImagenes;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
