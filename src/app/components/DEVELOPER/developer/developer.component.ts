import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { IndiceDeContenidosModel } from '../../../models/indice.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: ''
  }

  public indiceDeveloper: IndiceDeContenidosModel [] = [];
  public claseDeveloper = '';
  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/categorias/developer.png',
      fondo: true,
      tituloPost: '',
      alturaImagen: '200',
      sombra: 'drop'
    };

    this.claseDeveloper = 'mt-5';

    this.indiceDeveloper = [
      {
        nombre: 'RECURSOS DE INTERNET',
        posicion: 'pos-z',
        ruta: 'dev-super-recursos',
        colorFondo: 'bg-Developer border border-dark',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'PSEINT',
        posicion: 'rot-2',
        ruta: 'android-elementos',
        colorFondo: 'bg-Developer border border-dark',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'CONTROLES VISUAL STUDIO CODE',
        posicion: 'rot-2',
        ruta: 'dev-controles-visual-studio-code',
        colorFondo: 'bg-Developer border border-dark',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'SUBLIME TEXT',
        posicion: 'rot-2',
        ruta: 'android-elementos',
        colorFondo: 'bg-Developer border border-dark',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'ATOM',
        posicion: 'rot-2',
        ruta: 'android-elementos',
        colorFondo: 'bg-Developer border border-dark',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'ALGORITMOS AVANZADOS',
        posicion: 'rot-2',
        ruta: 'android-elementos',
        colorFondo: 'bg-Developer border border-dark',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'PRINCIPIOS SOLID...',
        posicion: 'rot-2',
        ruta: 'android-elementos',
        colorFondo: 'bg-Developer border border-dark',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'METODOLOGIAS ÁGILES',
        posicion: 'rot-2',
        ruta: 'android-elementos',
        colorFondo: 'bg-Developer border border-dark',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'EXTENSIONES VS CODE',
        posicion: 'rot-2',
        ruta: 'android-elementos',
        colorFondo: 'bg-Developer border border-dark',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'FICHA MODELO CANVAS',
        posicion: 'rot-2',
        ruta: 'android-elementos',
        colorFondo: 'bg-Developer border border-dark',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'GLOSARIO',
        posicion: 'rot-2',
        ruta: 'dev-glosario',
        colorFondo: 'bg-Developer border border-dark',
        color: 'text-light',
        estado: 'activo'
      }
    ]
  }


  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}
