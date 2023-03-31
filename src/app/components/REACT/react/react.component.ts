import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { IndiceDeContenidosModel } from '../../../models/indice.model';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
  }

  public indiceReact: IndiceDeContenidosModel [] = [];
  public claseReact = '';

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/categorias/react-white.png',
      fondo: true,
      tituloPost: '',
      alturaImagen: '150',
      sombra: 'drop'
    };

    this.claseReact = 'mt-2';

    this.indiceReact = [
      {
        nombre: 'REACT INSTALACION',
        posicion: 'pos-z',
        ruta: 'react-insta',
        colorFondo: 'bg-React',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'NET DESCRIPCION ELEMENTOS',
        posicion: 'pos-z',
        ruta: 'net-descripcion-elementos',
        colorFondo: 'bg-React',
        color: 't2',
        estado: 'activo'
      }
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
