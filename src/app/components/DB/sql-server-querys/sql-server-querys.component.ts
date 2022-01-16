import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { repositorioContenidoImagenes } from '../../../constants/globales.constant';

@Component({
  selector: 'app-sql-server-querys',
  templateUrl: './sql-server-querys.component.html',
  styleUrls: ['./sql-server-querys.component.css']
})
export class SqlServerQuerysComponent implements OnInit {

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
