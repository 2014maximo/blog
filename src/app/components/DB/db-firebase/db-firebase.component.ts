import { Component, OnInit } from '@angular/core';
import { HeaderPostModel, CategoriaModel } from '../../../models/post.model';
import { repositorioContenidoImagenes } from '../../../constants/globales.constant';
import { copiarAlPortapapeles } from 'src/app/shared/funciones/portapapeles';

@Component({
  selector: 'app-db-firebase',
  templateUrl: './db-firebase.component.html',
  styles: [
  ]
})
export class DbFirebaseComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: 'assets/img/icons/firebase.png',
    alturaImagen: '100',
    fondo: true,
    tituloPost: '',
    sombra: 'drop'
  }

  public breadcrumb: CategoriaModel = {
    activo: true,
    categoria: 'DB',
    colorText: 'tc-yellow-one',
    ruta: 'db'
  }

  public rutaImagen: string = '';

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.rutaImagen = repositorioContenidoImagenes;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  public copiarAlPortapapeles(cadenaAlclipboard: string) {
    copiarAlPortapapeles(cadenaAlclipboard);
  }

}
