import { Component, OnInit } from '@angular/core';
import { copiarAlPortapapeles } from 'src/app/shared/constants/funciones/portapapeles';
import { CategoriaModel } from '../../../../models/post.model';
import { postActual } from '../../../../shared/constants/funciones/funciones-globales';
import { DatosPost } from '../../../../models/categorias.model';
import { COMANDOS_ANGULAR_CLI, VERSIONES_ANGULAR } from './constants/ng-instalacion.constant';

@Component({
  selector: 'app-ng-instalacion',
  templateUrl: './ng-instalacion.component.html',
  styles: [
  ]
})
export class NgInstalacionComponent implements OnInit {

  public idPublicacion = '8618eb718b-655b-49a8-9e6e-f3732922b2df';
  public publicacion = new DatosPost();
  public comandosAngularCli = COMANDOS_ANGULAR_CLI;
  public versiones = VERSIONES_ANGULAR;

  public breadcrumb: CategoriaModel = {
    activo: true,
    categoria: 'ANGULAR',
    colorText: 'tc-red-one',
    ruta: 'angular'
  }

  constructor() { 
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables(){
    this.publicacion = postActual(this.idPublicacion)[0];
  }

  public copiarAlPortapapeles(cadenaAlclipboard: string) {
    copiarAlPortapapeles(cadenaAlclipboard);
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
