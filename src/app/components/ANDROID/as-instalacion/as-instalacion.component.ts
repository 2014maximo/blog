import { Component, OnInit } from '@angular/core';
import { HeaderPostModel, AccordeonModel } from '../../../models/post.model';

@Component({
  selector: 'app-as-instalacion',
  templateUrl: './as-instalacion.component.html',
  styleUrls: ['./as-instalacion.component.css']
})
export class AsInstalacionComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: true,
    tituloPost: 'ANDROID STUDIO INSTALACIÓN',
    sombra: 'drop'
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
  private inicializarVariables() {
    this.accordeonContend = [
      {
        elemento: 'Android Studio v4.1',
        nClass: 'motrarDos',
        mostrarlo: false,
        contenido: '',
        contenidoLista: [
          {
            contenido: 'Octubre de 2020'
          }
        ]
      },
      {
        elemento: 'Android Studio v4.0',
        nClass: 'motrarDos',
        mostrarlo: false,
        contenido: '',
        contenidoLista: [
          {
            contenido: 'Mayo de 2020'
          }
        ]
      },
      {
        elemento: 'Android Studio v3.6',
        nClass: 'motrarDos',
        mostrarlo: false,
        contenido: '',
        contenidoLista: [
          {
            contenido: 'Febrero de 2020'
          }
        ]
      },
      {
        elemento: 'Android Studio v3.5',
        nClass: 'motrarDos',
        mostrarlo: false,
        contenido: '',
        contenidoLista: [
          {
            contenido: 'Agosto de 2019'
          }
        ]
      },
      {
        elemento: 'Android Studio v3.4',
        nClass: 'motrarDos',
        mostrarlo: false,
        contenido: '',
        contenidoLista: [
          {
            contenido: 'Abril de 2019'
          }
        ]
      },
      {
        elemento: 'Android Studio v3.3',
        nClass: 'motrarDos',
        mostrarlo: false,
        contenido: '',
        contenidoLista: [
          {
            contenido: 'Enero de 2019'
          }
        ]
      },
      {
        elemento: 'Android Studio v3.2',
        nClass: 'motrarDos',
        mostrarlo: false,
        contenido: '',
        contenidoLista: [
          {
            contenido: 'Septiembre de 2018'
          }
        ]
      },
      {
        elemento: 'Android Studio v3.1',
        nClass: 'motrarDos',
        mostrarlo: false,
        contenido: '',
        contenidoLista: [
          {
            contenido: 'Marzo de 2018'
          }
        ]
      },
      {
        elemento: 'Android Studio v3.0',
        nClass: 'motrarDos',
        mostrarlo: false,
        contenido: '',
        contenidoLista: [
          {
            contenido: 'Octubre de 2017'
          }
        ]
      },
      {
        elemento: 'Android Studio v2.3.3',
        nClass: 'motrarDos',
        mostrarlo: false,
        contenido: '',
        contenidoLista: [
          {
            contenido: 'Junio de 2017'
          }
        ]
      },

    ]
  }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
