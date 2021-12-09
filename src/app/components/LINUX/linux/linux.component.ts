import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { IndiceDeContenidosModel } from '../../../models/indice.model';

@Component({
  selector: 'app-linux',
  templateUrl: './linux.component.html',
  styleUrls: ['./linux.component.css']
})
export class LinuxComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
  }

  public indiceLinux: IndiceDeContenidosModel [] = [];
  public claseLinux = '';

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/categorias/linux-white.png',
      fondo: true,
      tituloPost: '',
      alturaImagen: '150',
      sombra: 'drop'
    };

    this.claseLinux = 'mt-2';

    this.indiceLinux = [
      {
        nombre: 'COMANDOS',
        posicion: 'pos-z',
        rutaExterna: 'linux',
        fondo: 'bg-Linux',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'PROPIEDADES',
        posicion: 'pos-z',
        rutaExterna: 'java-propiedades',
        fondo: 'bg-Linux',
        colorTexto: 'text-light',
        activo: false
      }
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
