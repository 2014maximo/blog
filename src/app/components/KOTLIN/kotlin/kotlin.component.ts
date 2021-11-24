import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { IndiceDeContenidosModel } from '../../../models/indice.model';

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
        rutaExterna: 'javascript-propiedades',
        fondo: 'bg-Kotlin',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'RECORRER ARRAY OBJETOS',
        posicion: 'pos-z',
        rutaExterna: 'recorrer-arrays-objetos',
        fondo: 'bg-Kotlin',
        colorTexto: 'text-light',
        activo: false
      }
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
