import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../shared/models/post.model';
import { IndiceDeContenidosModel } from '../../../shared/models/indice.model';

@Component({
  selector: 'app-sena',
  templateUrl: './sena.component.html',
  styleUrls: ['./sena.component.css']
})
export class SenaComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
  }

  public indiceSena: IndiceDeContenidosModel [] = [];
  public claseSena = '';

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/categorias/sena.png',
      fondo: true,
      tituloPost: '',
      alturaImagen: '150',
      sombra: 'drop'
    };

    this.claseSena = 'mt-2';

    this.indiceSena = [
      {
        nombre: 'FICHA 2276734',
        posicion: 'pos-z',
        ruta: 'sena-ficha-actual',
        colorFondo: 'bg-Sena',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'RECURSOS INFORMATIVOS',
        posicion: 'pos-z',
        ruta: 'sena-recursos-informativos',
        colorFondo: 'bg-Sena',
        color: 'text-light',
        estado: 'activo'
      }
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
