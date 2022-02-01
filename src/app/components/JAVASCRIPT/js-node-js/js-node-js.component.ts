import { Component, OnInit } from '@angular/core';
import { HeaderPostModel, AccordeonModel, CategoriaModel } from '../../../models/post.model';

@Component({
  selector: 'app-js-node-js',
  templateUrl: './js-node-js.component.html',
  styleUrls: ['./js-node-js.component.css']
})
export class JsNodeJsComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
  }
  public breadcrumb: CategoriaModel = {
    activo: true,
    categoria: 'JAVASCRIPT',
    colorText: 'tc-yellow-one',
    ruta: 'javascript'
  }
  public accordeonContend: AccordeonModel [] = [
    {
      elemento: '',
      nClass: '',
    }
  ]

  constructor() {
    this.inicializarVariables();
  }
  
  ngOnInit(): void {
  }

  inicializarVariables() {

    this.cabeceraPost = {
      rutaImagen: 'assets/img/icons/Node.js_logo_black.png',
      fondo: true,
      tituloPost: '',
      alturaImagen: '180',
      sombra: 'drop'
    };

    this.accordeonContend = [
      {
        elemento: 'Argon: Node 4.x',
        nClass: 'motrarDos',
        mostrarlo: false,
        contenido: '',
        contenidoLista: [
          {
            contenido: '--------'
          }
        ]
      },
      {
        elemento: 'Boron: Node 6.x',
        nClass: 'motrarDos',
        mostrarlo: false,
        contenido: '',
        contenidoLista: [
          {
            contenido: '--------'
          }
        ]
      },
      {
        elemento: 'Carbon: Node 8.x',
        nClass: 'motrarDos',
        mostrarlo: false,
        contenido: '',
        contenidoLista: [
          {
            contenido: '--------'
          }
        ]
      }
    ]
  }
  
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
