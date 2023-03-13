import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { IndiceDeContenidosModel } from '../../../models/indice.model';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
  }

  public indiceJava: IndiceDeContenidosModel [] = [];
  public claseJava = '';

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/categorias/logo-java.png',
      fondo: true,
      tituloPost: '',
      alturaImagen: '150',
      sombra: 'drop'
    };

    this.claseJava = 'mt-2';

    this.indiceJava = [
      {
        nombre: 'INSTALACIÓN JAVA',
        posicion: 'pos-z',
        ruta: 'java-instalacion',
        colorFondo: 'bg-Java',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'PROPIEDADES',
        posicion: 'pos-z',
        ruta: 'java-propiedades',
        colorFondo: 'bg-Java',
        color: 'text-light',
        estado: 'inactivo'
      },
      {
        nombre: 'GLASSFISH',
        posicion: 'pos-z',
        ruta: 'java-glassfish',
        colorFondo: 'bg-Java',
        color: 'text-light',
        estado: 'activo'
      }
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
