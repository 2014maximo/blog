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
        rutaExterna: 'flutter-instalacion',
        fondo: 'bg-Flutter',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'ELEMENTOS Y DESCRIPCIÓN',
        posicion: 'pos-z',
        rutaExterna: 'android-elementos',
        fondo: 'bg-Flutter',
        colorTexto: 'text-light',
        activo: false
      }
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
