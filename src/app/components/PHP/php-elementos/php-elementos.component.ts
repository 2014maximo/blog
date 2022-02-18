import { Component, OnInit } from '@angular/core';
import { HeaderPostModel, CategoriaModel } from '../../../models/post.model';
import { repositorioContenidoImagenes } from '../../../constants/globales.constant';
import { copiarAlPortapapeles } from '../../../constants/funciones-globales';

@Component({
  selector: 'app-php-elementos',
  templateUrl: './php-elementos.component.html',
  styles: [
  ]
})
export class PhpElementosComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: 'assets/img/categorias/php.png',
    alturaImagen: '100',
    fondo: true,
    tituloPost: '',
    sombra: 'drop'
  }

  public breadcrumb: CategoriaModel = {
    activo: true,
    categoria: 'PHP',
    colorText: 'tc-blue-five',
    ruta: 'php'
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
