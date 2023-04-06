import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../../shared/models/post.model';
import { IndiceDeContenidosModel } from '../../../../shared/models/indice.model';

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
        ruta: 'astro-sol-ingreso',
        colorFondo: 'bg-light',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'GESTION FORMULARIO',
        posicion: 'rot-2',
        ruta: 'estadistica-gestion-formulario',
        colorFondo: 'bg-light',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'CRUD',
        posicion: 'rot-2',
        ruta: 'android-elementos',
        colorFondo: 'bg-light',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'TERMINOS AVANZADOS',
        posicion: 'rot-2',
        ruta: 'android-elementos',
        colorFondo: 'bg-light',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'PRUEBAS UNITARIAS',
        posicion: 'rot-2',
        ruta: 'android-elementos',
        colorFondo: 'bg-light',
        color: 't2',
        estado: 'activo'
      },
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
