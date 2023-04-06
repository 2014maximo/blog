import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../shared/models/post.model';
import { IndiceDeContenidosModel } from '../../../shared/models/indice.model';
import { ANGULAR } from '../../../constants/publicaciones/posts-angular.constant';
import { DatosPost } from '../../../shared/models/categorias.model';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  public cabeceraPost = new HeaderPostModel();

  public indiceAngular: IndiceDeContenidosModel [] = [];
  public indiceIonic: IndiceDeContenidosModel [] = [];
  public indicePrime: IndiceDeContenidosModel [] = [];
  public claseAngular = '';
  public idPost: string = 'eb4011f5-81df-4261-b5c5-8f58d2ba88b5'

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
