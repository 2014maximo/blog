import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { IndiceDeContenidosModel } from '../../../models/indice.model';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
  }

  public indiceJavascript: IndiceDeContenidosModel [] = [];
  public indiceNodeJs: IndiceDeContenidosModel [] = [];
  public claseJavascript = '';

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/categorias/javascript.png',
      fondo: true,
      tituloPost: '',
      alturaImagen: '150',
      sombra: 'drop'
    };

    this.claseJavascript = 'mt-2';

    this.indiceJavascript = [
      {
        nombre: 'ELEMENTOS',
        posicion: 'pos-z',
        rutaExterna: 'js-elementos',
        fondo: 'bg-Javascript',
        colorTexto: 't2 textoHoverBlanco',
        activo: true
      },
      {
        nombre: 'RECORRER ARRAY OBJETOS',
        posicion: 'pos-z',
        rutaExterna: 'js-recorrer-arrays-objetos',
        fondo: 'bg-Javascript',
        colorTexto: 't2 textoHoverBlanco',
        activo: true
      },
      {
        nombre: 'TRABAJO CON FECHAS',
        posicion: 'pos-z',
        rutaExterna: 'js-trabajo-fechas',
        fondo: 'bg-Javascript',
        colorTexto: 't2 textoHoverBlanco',
        activo: true
      },
    ]
    this.indiceNodeJs = [
      {
        nombre: 'NODE JS',
        posicion: 'pos-z',
        rutaExterna: 'js-node-js',
        fondo: 'bg-Javascript',
        colorTexto: 't2 textoHoverBlanco',
        activo: true
      },
      {
        nombre: 'NODE JS CON NVM',
        posicion: 'pos-z',
        rutaExterna: 'js-instalando-node-con-nvm',
        fondo: 'bg-Javascript',
        colorTexto: 't2 textoHoverBlanco',
        activo: true
      },
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
