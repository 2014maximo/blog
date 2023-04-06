import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../shared/models/post.model';
import { IndiceDeContenidosModel } from '../../../shared/models/indice.model';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
  }

  public indiceHtml: IndiceDeContenidosModel [] = [];
  public claseHtml = '';

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/categorias/html-white.png',
      fondo: true,
      tituloPost: '',
      alturaImagen: '150',
      sombra: 'drop'
    };

    this.claseHtml = 'mt-2';

    this.indiceHtml = [
      {
        nombre: 'ETIQUETAS',
        posicion: 'pos-z',
        ruta: 'html-etiquetas',
        colorFondo: 'bg-Html',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'PROPIEDADES',
        posicion: 'pos-z',
        ruta: 'html-propiedades',
        colorFondo: 'bg-Html',
        color: 'text-light',
        estado: 'inactivo'
      }
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
