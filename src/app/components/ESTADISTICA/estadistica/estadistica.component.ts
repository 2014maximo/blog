import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { IndiceDeContenidosModel } from '../../../models/indice.model';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: ''
  }

  public indiceEstadistica: IndiceDeContenidosModel [] = [];
  public claseEstadistica = '';

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/categorias/estadistica.png',
      fondo: true,
      tituloPost: 'ESTADÍSTICA',
      alturaImagen: '150',
      sombra: 'drop'
    };

    this.claseEstadistica = 'mt-2';

    this.indiceEstadistica = [
      {
        nombre: 'ASTRO-SOL INGRESO',
        posicion: 'pos-z',
        rutaExterna: 'astro-sol-ingreso',
        fondo: 'bg-light',
        colorTexto: 't2',
        activo: true
      },
      {
        nombre: 'GESTION FORMULARIO',
        posicion: 'rot-2',
        rutaExterna: 'estadistica-gestion-formulario',
        fondo: 'bg-light',
        colorTexto: 't2',
        activo: true
      },
      {
        nombre: 'CRUD',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-light',
        colorTexto: 't2'
      },
      {
        nombre: 'TERMINOS AVANZADOS',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-light',
        colorTexto: 't2'
      },
      {
        nombre: 'PRUEBAS UNITARIAS',
        posicion: 'rot-2',
        rutaExterna: 'android-elementos',
        fondo: 'bg-light',
        colorTexto: 't2'
      },
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
