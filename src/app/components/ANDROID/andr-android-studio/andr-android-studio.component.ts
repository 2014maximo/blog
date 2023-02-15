import { Component, OnInit } from '@angular/core';
import { rutaCatego } from 'src/app/constants/globales.constant';
import { CategoriaModel, AccordeonModel, PostModel } from '../../../models/post.model';
import { traerPost, postActual } from '../../../constants/funciones-globales';
import { POSTS } from 'src/app/constants/post.constant';

@Component({
  selector: 'app-andr-android-studio',
  templateUrl: './andr-android-studio.component.html',
  styles: [
  ]
})
export class AndrAndroidStudioComponent implements OnInit {

  public cabeceraPost = traerPost('andr-0001', POSTS) || new PostModel;
  public post = postActual('7ea51cec-4d81-44f7-a4b4-7debe4c5a42e');

  public breadcrumb: CategoriaModel = {
    activo: this.cabeceraPost.mostrarBreadcrumb,
    categoria: this.cabeceraPost.categoria,
    colorText: this.cabeceraPost.colorText,
    ruta: this.cabeceraPost.ruta,
  }

  public accordeonContend: AccordeonModel [] = [
    {
      elemento: '',
      nClass: '',
    }
  ]

  constructor() {
    console.log(this.post, 'POST ACTUAL');
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
