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
      tituloPost: 'DESARROLLADOR',
      alturaImagen: '200',
      sombra: 'drop'
    };

    this.claseDeveloper = 'mt-5';

    this.indiceDeveloper = [
      {
        nombre: 'RECURSOS DE INTERNET',
        posicion: 'pos-z',
        rutaExterna: 'super-recursos-internet',
        fondo: 'bg-Developer',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'PSEINT',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Developer',
        colorTexto: 'text-light',
      },
      {
        nombre: 'CONTROLES VISUAL STUDIO CODE',
        posicion: 'rot-2',
        rutaExterna: 'dev-controles-visual-studio-code',
        fondo: 'bg-Developer',
        colorTexto: 'text-light',
      },
      {
        nombre: 'SUBLIME TEXT',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Developer',
        colorTexto: 'text-light',
      },
      {
        nombre: 'ATOM',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Developer',
        colorTexto: 'text-light',
      },
      {
        nombre: 'ALGORITMOS AVANZADOS',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Developer',
        colorTexto: 'text-light',
      },
      {
        nombre: 'PRINCIPIOS SOLID...',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Developer',
        colorTexto: 'text-light',
      },
      {
        nombre: 'METODOLOGIAS ÁGILES',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Developer',
        colorTexto: 'text-light',
      },
      {
        nombre: 'EXTENSIONES VS CODE',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Developer',
        colorTexto: 'text-light',
      },
      {
        nombre: 'FICHA MODELO CANVAS',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Developer',
        colorTexto: 'text-light',
      },
      {
        nombre: 'GLOSARIO',
        posicion: 'rot-2',
        rutaExterna: 'dev-glosario',
        fondo: 'bg-Developer',
        colorTexto: 'text-light',
        activo: true
      }
    ]
  }


  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}
