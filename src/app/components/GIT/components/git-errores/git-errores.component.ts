import { Component, OnInit } from '@angular/core';
import { postActual } from '@shared/constants';
import { CategoriaModel } from '@shared/models';
import { DatosPost } from '@shared/models/categorias.model';

@Component({
  selector: 'app-git-errores',
  templateUrl: './git-errores.component.html',
  styleUrls: ['./git-errores.component.css']
})
export class GitErroresComponent implements OnInit {

  public breadcrumb: CategoriaModel = {
    activo: true,
    categoria: 'GIT',
    colorText: 'c-Git',
    ruta: 'git'
  }
  public idPublicacion = '4871cb38-9831-4099-bd70-c0b540bf47a1';
  public publicacion = new DatosPost();


  constructor() { 
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables(){
    this.publicacion = postActual(this.idPublicacion)[0];
  }

  public copiarAlPortapapeles(cadenaAlclipboard: string) {
    this.copiarAlPortapapeles(cadenaAlclipboard);
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
