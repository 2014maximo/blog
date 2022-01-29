import { Component, OnInit } from '@angular/core';
import { repositorioContenidoImagenes } from '../../../constants/globales.constant';
import { HeaderPostModel } from '../../../models/post.model';

@Component({
  selector: 'app-db-sql-server',
  templateUrl: './db-sql-server.component.html',
  styles: [
  ]
})
export class DbSqlServerComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
  }
  public rutaExternaImagenes: string = ''

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/icons/microsoft_sqlserver.png',
      fondo: true,
      tituloPost: 'DESCRIPCIÓN QUERYS',
      alturaImagen: '150',
      sombra: 'drop'
    };
    this.rutaExternaImagenes = repositorioContenidoImagenes;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
