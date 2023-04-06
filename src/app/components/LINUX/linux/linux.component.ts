import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../shared/models/post.model';
import { IndiceDeContenidosModel } from '../../../shared/models/indice.model';

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
        ruta: 'linux',
        colorFondo: 'bg-Linux',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'PROPIEDADES',
        posicion: 'pos-z',
        ruta: 'java-propiedades',
        colorFondo: 'bg-Linux',
        color: 'text-light',
        estado: 'inactivo'
      }
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
