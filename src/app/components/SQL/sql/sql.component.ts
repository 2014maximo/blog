import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { IndiceDeContenidosModel } from '../../../models/indice.model';

@Component({
  selector: 'app-sql',
  templateUrl: './sql.component.html',
  styleUrls: ['./sql.component.css']
})
export class SqlComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
  }

  public indiceSql: IndiceDeContenidosModel [] = [];
  public claseSql = '';

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/categorias/sql.png',
      fondo: true,
      tituloPost: '',
      alturaImagen: '150',
      sombra: 'drop'
    };

    this.claseSql = 'mt-2';

    this.indiceSql = [
      {
        nombre: 'SQL INSTALACIONES',
        posicion: 'pos-z',
        rutaExterna: 'sql-instalaciones',
        fondo: 'bg-Sql',
        colorTexto: 't2',
        activo: true
      },
      {
        nombre: 'MODELO RELACIONAL Y ENTIDAD RELACIÓN',
        posicion: 'pos-z',
        rutaExterna: 'sql-modelo-relacional-entidad-relacion',
        fondo: 'bg-Sql',
        colorTexto: 't2',
        activo: true
      }
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
