import { Component, OnInit } from '@angular/core';
import { CategoriaModel, HeaderPostModel } from '@shared/models';

@Component({
  selector: 'app-db-sql',
  templateUrl: './db-sql.component.html',
  styles: [
  ]
})
export class DbSqlComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
  }

  public breadcrumb: CategoriaModel = {
    activo: true,
    categoria: 'DB',
    colorText: 'tc-yellow-one',
    ruta: 'db'
  }

  public claseSql = '';

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/icons/sql.png',
      fondo: true,
      tituloPost: '',
      alturaImagen: '150',
      sombra: 'drop'
    };

    this.claseSql = 'mt-2';

  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
