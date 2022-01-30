import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { IndiceDeContenidosModel } from '../../../models/indice.model';

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
        rutaExterna: 'html-etiquetas',
        fondo: 'bg-Html',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'PROPIEDADES',
        posicion: 'pos-z',
        rutaExterna: 'html-propiedades',
        fondo: 'bg-Html',
        colorTexto: 'text-light',
        activo: false
      }
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
