import { Component, OnInit } from '@angular/core';
import { HeaderPostModel, CategoriaModel } from '../../../../models/post.model';

@Component({
  selector: 'app-ng-cors',
  templateUrl: './ng-cors.component.html',
  styleUrls: ['./ng-cors.component.css']
})
export class NgCorsComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: 'Cabecera CORS'
  }

  public breadcrumb: CategoriaModel = {
    activo: true,
    categoria: 'ANGULAR',
    colorText: 'tc-red-one',
    ruta: 'angular'
  }

  constructor() { }

  ngOnInit(): void {
  }

  public copiarAlPortapapeles(cadenaAlclipboard: string) {
    this.copiarAlPortapapeles(cadenaAlclipboard);
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
