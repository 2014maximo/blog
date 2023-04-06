import { Component, OnInit } from '@angular/core';
import { copiarAlPortapapeles } from 'src/app/shared/constants/funciones/portapapeles';
import { AccordeonModel, HeaderPostModel, CategoriaModel } from '../../../shared/models/post.model';

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

  public copiarAlPortapapeles(cadenaAlclipboard: string) {
    copiarAlPortapapeles(cadenaAlclipboard);
  }
  
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
