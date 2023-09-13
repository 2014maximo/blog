import { Component, OnInit } from '@angular/core';
import { repositorioContenidoImagenes } from '@constants/generales/globales.constant';
import { CategoriaModel, HeaderPostModel } from '@shared/models';
import { copiarAlPortapapeles } from 'src/app/shared/constants/funciones/portapapeles';

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
