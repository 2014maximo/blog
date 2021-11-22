import { Component, OnInit } from '@angular/core';
import { MENU_1, MENU_2, MENU_3, MENU_4 } from '../../constants/menu-home.constant';
import { CATEGORIAS } from '../../constants/categorias.constant';
import { CategoriasModel } from '../../models/categorias.model';
import { IndiceDeContenidosModel } from '../../models/indice.model';

@Component({
  selector: 'app-menu-home',
  templateUrl: './menu-home.component.html',
  styleUrls: ['./menu-home.component.css']
})
export class MenuHomeComponent implements OnInit {

  public menus: any;
  public categorias: CategoriasModel[] = [];
  public pasoDeIndice: IndiceDeContenidosModel [] = []
  public claseContenedor: string = '';

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables(){
    this.menus = {
      menuUno: MENU_1,
      menuDos: MENU_2,
      menuTres: MENU_3,
      menuCuatro: MENU_4,
    }
    this.categorias = CATEGORIAS;

    this.claseContenedor = 'mt-2'

    this.pasoDeIndice = [
      {
        nombre: 'ANDROID STUDIO',
        posicion: 'pos-z',
        rutaExterna: 'android-studio',
        fondo: 'bg-Android',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'ANGULAR',
        posicion: 'rot-2',
        rutaExterna: 'angular',
        fondo: 'bg-Angular',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'CSS',
        posicion: 'rot-2',
        rutaExterna: 'css',
        fondo: 'bg-Css',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'DART',
        posicion: 'rot-2',
        rutaExterna: 'dart',
        fondo: 'bg-Dart',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'DEVELOPER',
        posicion: 'rot-2',
        rutaExterna: 'developer',
        fondo: 'bg-Developer',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'FLUTTER',
        posicion: 'rot-1',
        rutaExterna: 'flutter',
        fondo: 'bg-Flutter',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'GIT',
        posicion: 'rot-3',
        rutaExterna: 'git',
        fondo: 'bg-Git',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'HTML',
        posicion: 'pos-z',
        rutaExterna: 'html',
        fondo: 'bg-Html',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'JAVA',
        posicion: 'rot-2',
        rutaExterna: 'java',
        fondo: 'bg-Java',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'JAVASCRIPT',
        posicion: 'rot-2',
        rutaExterna: 'javascript',
        fondo: 'bg-Javascript',
        colorTexto: 't2',
        activo: true
      },
      {
        nombre: 'LINUX',
        posicion: 'rot-2',
        rutaExterna: 'linux',
        fondo: 'bg-Linux',
        colorTexto: 'text-light',
        activo: true
      },
    ]

  }

  public abrirMenuCategoria(categoria: string, abertura: string){
    //let shand = document.getElementsByClassName('s-hand') as HTMLCollectionOf<HTMLElement>;
    let shand = document.getElementsByClassName(categoria) as HTMLCollectionOf<HTMLElement>

    if (shand.length != 0) {
      shand[0].style.width = `${abertura}`;
    }
  }

  public cierreMenu(categoria: string){
    let shand2 = document.getElementsByClassName(categoria) as HTMLCollectionOf<HTMLElement>

    if (shand2.length != 0) {
      shand2[0].style.width = "0";
    }
  }






}
