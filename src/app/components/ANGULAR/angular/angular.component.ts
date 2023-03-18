import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { IndiceDeContenidosModel } from '../../../models/indice.model';
import { ANGULAR } from '../../../constants/publicaciones/posts-angular.constant';
import { DatosPost } from '../../../models/categorias.model';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
  }

  public indiceAngular: IndiceDeContenidosModel [] = [];
  public indiceIonic: IndiceDeContenidosModel [] = [];
  public indicePrime: IndiceDeContenidosModel [] = [];
  public claseAngular = '';

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {

    this.cabeceraPost = {
      rutaImagen: 'assets/img/icons/Angular.png',
      fondo: true,
      tituloPost: 'ANGULAR',
      alturaImagen: '300',
      sombra: 'drop'
    };

    this.claseAngular = 'mt-2';

    ANGULAR.forEach( (post:DatosPost, i:number ) => {
      let seleccionado: IndiceDeContenidosModel = {
        color: '',
        colorFondo: post.estilos.colorFondo,
        estado: post.estado,
        nombre: post.nombre,
        posicion: post.posicion,
        ruta: post.ruta,
        rutaInterna: ''
      }
      this.indiceAngular.push(seleccionado)
    })


  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }


}
