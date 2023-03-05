import { Component, OnInit } from '@angular/core';
import { MENU_1, MENU_2, MENU_3, MENU_4, MENU_5 } from '../../constants/menu-home.constant';
import { CATEGORIAS } from '../../constants/categorias.constant';
import { CategoriasModel } from '../../models/categorias.model';
import { IndiceDeContenidosModel } from '../../models/indice.model';
import { CATEGORIA } from '../../constants/categoria.constant';

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
  public posts = CATEGORIA;

  constructor() {
    this.inicializarVariables();
    this.extraerMenu(['android','angular','css', 'dart'])
  }

  ngOnInit(): void {
  }

  private inicializarVariables(){
    this.menus = {
      menuUno: this.extraerMenu(['android','angular','css', 'dart']),
      menuDos: this.extraerMenu(['db','developer','electron', 'flutter']),
      menuTres: this.extraerMenu(['git','html','java', 'javascript']),
      menuCuatro: this.extraerMenu(['kotlin','kubernetes','linux', 'net']),
      menuCinco: this.extraerMenu(['php','react','wordpress'])
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
        nombre: 'ELECTRON',
        posicion: 'pos-z',
        rutaExterna: 'electron',
        fondo: 'bg-Electron',
        colorTexto: 't2',
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
        nombre: 'KOTLIN',
        posicion: 'pos-z',
        rutaExterna: 'kotlin',
        fondo: 'bg-Kotlin',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'KUBERNETES',
        posicion: 'pos-z',
        rutaExterna: 'kubernetes',
        fondo: 'bg-Kubernetes',
        colorTexto: 'text-light',
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
      {
        nombre: 'NET FRAMEWORK',
        posicion: 'rot-2',
        rutaExterna: 'net-framework',
        fondo: 'bg-NetFramework',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'PHP',
        posicion: 'rot-2',
        rutaExterna: 'php',
        fondo: 'bg-Php',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'REACT',
        posicion: 'rot-2',
        rutaExterna: 'react',
        fondo: 'bg-React',
        colorTexto: 't2',
        activo: true
      },
      {
        nombre: 'SENA',
        posicion: 'rot-2',
        rutaExterna: 'sena',
        fondo: 'bg-Sena',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'DB',
        posicion: 'rot-2',
        rutaExterna: 'db',
        fondo: 'bg-Sql',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'WORDPRESS',
        posicion: 'rot-2',
        rutaExterna: 'wordpress',
        fondo: 'bg-Wordpress',
        colorTexto: 'text-light',
        activo: true
      },
    ]

  }

  private extraerMenu(referencias: string[]):any[]{
    let menu:any[]=[];
    referencias.forEach( (e:any, i:number) => {
      let categorias = this.posts.filter( elemento => elemento.categoria === e)
      menu.push(categorias[0]);
    })
    return menu
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
