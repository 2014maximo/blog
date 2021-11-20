import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { IndiceDeContenidosModel } from '../../../models/indice.model';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
  }

  public indiceGit: IndiceDeContenidosModel [] = [];
  public claseGit = '';

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/categorias/git-light.png',
      fondo: true,
      tituloPost: '',
      alturaImagen: '150',
      sombra: 'drop'
    };

    this.claseGit = 'mt-2';

    this.indiceGit = [
      {
        nombre: 'INSTALACIÓN',
        posicion: 'pos-z',
        rutaExterna: 'git-instalacion',
        fondo: 'bg-Git',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'ELEMENTOS Y DESCRIPCIÓN',
        posicion: 'pos-z',
        rutaExterna: 'git-elementos',
        fondo: 'bg-Git',
        colorTexto: 'text-light',
        activo: false
      }
    ]

  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
