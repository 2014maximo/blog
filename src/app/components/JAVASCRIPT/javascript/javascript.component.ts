import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../shared/models/post.model';
import { IndiceDeContenidosModel } from '../../../shared/models/indice.model';

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
  public indiceTypescript: IndiceDeContenidosModel [] = [];
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
        ruta: 'js-elementos',
        colorFondo: 'bg-Javascript',
        color: 't2 textoHoverBlanco',
        estado: 'activo'
      },
      {
        nombre: 'RECORRER ARRAY OBJETOS',
        posicion: 'pos-z',
        ruta: 'js-recorrer-arrays-objetos',
        colorFondo: 'bg-Javascript',
        color: 't2 textoHoverBlanco',
        estado: 'activo'
      },
      {
        nombre: 'TRABAJO CON FECHAS',
        posicion: 'pos-z',
        ruta: 'js-trabajo-fechas',
        colorFondo: 'bg-Javascript',
        color: 't2 textoHoverBlanco',
        estado: 'activo'
      },
    ]
    this.indiceNodeJs = [
      {
        nombre: 'NODE JS',
        posicion: 'pos-z',
        ruta: 'js-node-js',
        colorFondo: 'bg-Javascript',
        color: 't2 textoHoverBlanco',
        estado: 'activo'
      },
      {
        nombre: 'NODE JS CON NVM',
        posicion: 'pos-z',
        ruta: 'js-instalando-node-con-nvm',
        colorFondo: 'bg-Javascript',
        color: 't2 textoHoverBlanco',
        estado: 'activo'
      },
    ]
    this.indiceTypescript = [
      {
        nombre: 'ELEMENTOS',
        posicion: 'pos-z',
        ruta: 'js-typescript-elementos',
        colorFondo: 'bg-Javascript',
        color: 't2 textoHoverBlanco',
        estado: 'activo'
      },
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
