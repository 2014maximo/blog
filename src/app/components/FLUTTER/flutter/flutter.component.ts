import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { IndiceDeContenidosModel } from '../../../models/indice.model';

@Component({
  selector: 'app-flutter',
  templateUrl: './flutter.component.html',
  styleUrls: ['./flutter.component.css']
})
export class FlutterComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
  }

  public indiceFlutter: IndiceDeContenidosModel [] = [];
  public claseFlutter = '';

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {

    this.cabeceraPost = {
      rutaImagen: 'assets/img/categorias/flutter_text_white.png',
      fondo: true,
      tituloPost: '',
      alturaImagen: '300',
      sombra: 'drop'
    };

    this.claseFlutter = 'mt-2';

    this.indiceFlutter = [
      {
        nombre: 'INSTALACIÓN',
        posicion: 'pos-z',
        ruta: 'flutter-instalacion',
        colorFondo: 'bg-Flutter',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'ELEMENTOS Y DESCRIPCIÓN',
        posicion: 'pos-z',
        ruta: 'flutter-elementos',
        colorFondo: 'bg-Flutter',
        color: 'text-light',
        estado: 'activo'
      }
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
