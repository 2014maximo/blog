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
        rutaExterna: 'java-instalacion',
        fondo: 'bg-Java',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'PROPIEDADES',
        posicion: 'pos-z',
        rutaExterna: 'java-propiedades',
        fondo: 'bg-Java',
        colorTexto: 'text-light',
        activo: false
      },
      {
        nombre: 'GLASSFISH',
        posicion: 'pos-z',
        rutaExterna: 'java-glassfish',
        fondo: 'bg-Java',
        colorTexto: 'text-light',
        activo: true
      }
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
