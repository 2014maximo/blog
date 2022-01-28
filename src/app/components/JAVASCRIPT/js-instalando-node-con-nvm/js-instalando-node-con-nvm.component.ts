import { Component, OnInit } from '@angular/core';
import { AccordeonModel, HeaderPostModel } from '../../../models/post.model';

@Component({
  selector: 'app-js-instalando-node-con-nvm',
  templateUrl: './js-instalando-node-con-nvm.component.html',
  styleUrls: ['./js-instalando-node-con-nvm.component.css']
})
export class JsInstalandoNodeConNvmComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
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
      rutaImagen: '',
      fondo: true,
      tituloPost: 'Node JS con NVM',
      alturaImagen: '',
      sombra: ''
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
