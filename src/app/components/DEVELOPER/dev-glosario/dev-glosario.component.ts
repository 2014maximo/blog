import { Component, OnInit } from '@angular/core';
import { HeaderPostModel, CategoriaModel } from '../../../models/post.model';
import { repositorioContenidoImagenes } from '../../../constants/globales.constant';

@Component({
  selector: 'app-dev-glosario',
  templateUrl: './dev-glosario.component.html',
  styleUrls: ['./dev-glosario.component.css']
})
export class DevGlosarioComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: true,
    tituloPost: 'GLOSARIO',
    sombra: ''
  }
  public rutaImagen: string = '';

  public breadcrumb: CategoriaModel = {
    activo: true,
    categoria: 'DEVELOPER',
    colorText: 'tc-yellow-one',
    ruta: 'developer'
  }

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
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = cadenaAlclipboard;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}