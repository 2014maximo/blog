import { Component, OnInit } from '@angular/core';
import { traerPost } from '../../../shared/constants/funciones/funciones-globales';
import { POSTS } from '../../../constants/post.constant';
import { CategoriaModel, HeaderPostModel } from '../../../models/post.model';

@Component({
  selector: 'app-css-bootstrap4clases',
  templateUrl: './css-bootstrap4clases.component.html',
  styleUrls: ['./css-bootstrap4clases.component.css']
})
export class CssBootstrap4clasesComponent implements OnInit {

  public postActual = traerPost('css-0001', POSTS);

  public breadcrumb: CategoriaModel = {
    activo: true,
    categoria: 'CSS',
    colorText: 'tc-blue-one',
    ruta: 'css'
  }

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

  private inicializarVariables(){

  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
