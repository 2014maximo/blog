import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { IndiceDeContenidosModel } from '../../../models/indice.model';

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
        rutaExterna: 'db-firebase',
        fondo: 'bg-Sql',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'SQL',
        posicion: 'pos-z',
        rutaExterna: 'db-sql',
        fondo: 'bg-Sql',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'SQL SERVER QUERYS',
        posicion: 'pos-z',
        rutaExterna: 'db-sql-server-querys',
        fondo: 'bg-Sql',
        colorTexto: 'text-light',
        activo: true
      }
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
