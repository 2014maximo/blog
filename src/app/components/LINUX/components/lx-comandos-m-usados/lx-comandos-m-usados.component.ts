import { Component, OnInit } from '@angular/core';
import { postActual } from '@shared/constants';
import { CategoriaModel } from '@shared/models';
import { DatosPost } from '@shared/models/categorias.model';

@Component({
  selector: 'app-lx-comandos-m-usados',
  templateUrl: './lx-comandos-m-usados.component.html',
  styleUrls: ['./lx-comandos-m-usados.component.css']
})
export class LxComandosMUsadosComponent implements OnInit {

  public breadcrumb: CategoriaModel = {
    activo: true,
    categoria: 'LINUX',
    colorText: 'c-Linux',
    ruta: 'linux'
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
