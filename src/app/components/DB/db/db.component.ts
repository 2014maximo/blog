import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../shared/models/post.model';
import { IndiceDeContenidosModel } from '../../../shared/models/indice.model';

@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.css']
})
export class DbComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
  }

  public indiceDb: IndiceDeContenidosModel [] = [];
  public claseDb = '';

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
      alturaImagen: '100',
      sombra: 'drop'
    };

    this.claseDb = 'mt-2';

    this.indiceDb = [
      {
        nombre: 'FIREBASE',
        posicion: 'pos-z',
        ruta: 'db-firebase',
        colorFondo: 'bg-Sql',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'SQL',
        posicion: 'pos-z',
        ruta: 'db-sql',
        colorFondo: 'bg-Sql',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'SQL SERVER',
        posicion: 'pos-z',
        ruta: 'db-sql-server',
        colorFondo: 'bg-Sql',
        color: 'text-light',
        estado: 'activo'
      }
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
