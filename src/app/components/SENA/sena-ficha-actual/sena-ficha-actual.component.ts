import { Component, OnInit } from '@angular/core';
import { HeaderPostModel, CategoriaModel } from '../../../models/post.model';

@Component({
  selector: 'app-sena-ficha-actual',
  templateUrl: './sena-ficha-actual.component.html',
  styles: [
  ]
})
export class SenaFichaActualComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
  }

  public breadcrumb: CategoriaModel = {
    activo: true,
    categoria: 'SENA',
    colorText: 'tc-orange-three',
    ruta: 'sena'
  }

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables(){
    this.cabeceraPost = {
      rutaImagen: 'assets/img/categorias/sena.png',
      fondo: true,
      tituloPost: '7622732',
      alturaImagen: '300',
      sombra: 'drop'
    };
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
