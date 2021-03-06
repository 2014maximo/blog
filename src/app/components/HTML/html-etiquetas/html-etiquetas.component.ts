import { Component, OnInit } from '@angular/core';
import { CategoriaModel, HeaderPostModel } from '../../../models/post.model';
import { repositorioContenidoImagenes } from '../../../constants/globales.constant';

@Component({
  selector: 'app-html-etiquetas',
  templateUrl: './html-etiquetas.component.html',
  styleUrls: ['./html-etiquetas.component.css']
})
export class HtmlEtiquetasComponent implements OnInit {

  public breadcrumb: CategoriaModel = {
    activo: true,
    categoria: 'HTML',
    colorText: 'tc-orange-three',
    ruta: 'html'
  }

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
      rutaImagen: '',
      fondo: true,
      tituloPost: 'ETIQUETAS HTML',
      alturaImagen: '',
      sombra: ''
    };
    this.rutaExternaImagenes = repositorioContenidoImagenes;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
