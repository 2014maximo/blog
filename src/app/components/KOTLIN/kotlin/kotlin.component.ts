import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../shared/models/post.model';
import { IndiceDeContenidosModel } from '../../../shared/models/indice.model';

@Component({
  selector: 'app-kotlin',
  templateUrl: './kotlin.component.html',
  styleUrls: ['./kotlin.component.css']
})
export class KotlinComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
  }

  public indiceKotlin: IndiceDeContenidosModel [] = [];
  public claseKotlin = '';

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/categorias/kotlin-white.png',
      fondo: true,
      tituloPost: '',
      alturaImagen: '150',
      sombra: 'drop'
    };

    this.claseKotlin = 'mt-2';

    this.indiceKotlin = [
      {
        nombre: 'PROPIEDADES',
        posicion: 'pos-z',
        ruta: 'javascript-propiedades',
        colorFondo: 'bg-Kotlin',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'RECORRER ARRAY OBJETOS',
        posicion: 'pos-z',
        ruta: 'recorrer-arrays-objetos',
        colorFondo: 'bg-Kotlin',
        color: 'text-light',
        estado: 'inactivo'
      }
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
