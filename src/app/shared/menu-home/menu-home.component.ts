import { Component, OnInit } from '@angular/core';
import { MENU_1, MENU_2, MENU_3, MENU_4, MENU_5 } from '../../constants/menu-home.constant';
import { CATEGORIAS } from '../../constants/categorias.constant';
import { CategoriasModel, CategoriaPostModel, DatosPost } from '../../models/categorias.model';
import { IndiceDeContenidosModel } from '../../models/indice.model';
import { CATEGORIA } from '../../constants/categoria.constant';
import { datosCategoria, reduccionTexto } from 'src/app/constants/funciones-globales';

@Component({
  selector: 'app-menu-home',
  templateUrl: './menu-home.component.html',
  styleUrls: ['./menu-home.component.css']
})
export class MenuHomeComponent implements OnInit {

  public menus: any;
  public categorias: CategoriaPostModel[] = [];
  public pasoDeIndice: IndiceDeContenidosModel [] = []
  public claseContenedor: string = '';
  public posts = CATEGORIA;

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
    let dato = datosCategoria('android',12);

  }

  private inicializarVariables(){
    this.menus = {
      menuUno: this.extraerMenu(['android','angular','css', 'dart']),
      menuDos: this.extraerMenu(['db','developer','electron', 'flutter']),
      menuTres: this.extraerMenu(['git','html','java', 'javascript']),
      menuCuatro: this.extraerMenu(['kotlin','kubernetes','linux', 'net']),
      menuCinco: this.extraerMenu(['php','react','wordpress'])
    }

    this.categorias = CATEGORIA;

    this.claseContenedor = 'mt-2'

    this.pasoDeIndice = [
      {
        nombre: 'ANDROID STUDIO',
        posicion: 'pos-z',
        ruta: 'android-studio',
        colorFondo: 'bg-Android',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'ANGULAR',
        posicion: 'rot-2',
        ruta: 'angular',
        colorFondo: 'bg-Angular',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'CSS',
        posicion: 'rot-2',
        ruta: 'css',
        colorFondo: 'bg-Css',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'DART',
        posicion: 'rot-2',
        ruta: 'dart',
        colorFondo: 'bg-Dart',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'DEVELOPER',
        posicion: 'rot-2',
        ruta: 'developer',
        colorFondo: 'bg-Developer',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'ELECTRON',
        posicion: 'pos-z',
        ruta: 'electron',
        colorFondo: 'bg-Electron',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'FLUTTER',
        posicion: 'rot-1',
        ruta: 'flutter',
        colorFondo: 'bg-Flutter',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'GIT',
        posicion: 'rot-3',
        ruta: 'git',
        colorFondo: 'bg-secondary',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'HTML',
        posicion: 'pos-z',
        ruta: 'html',
        colorFondo: 'bg-secondary',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'JAVA',
        posicion: 'rot-2',
        ruta: 'java',
        colorFondo: 'bg-secondary',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'JAVASCRIPT',
        posicion: 'rot-2',
        ruta: 'javascript',
        colorFondo: 'bg-secondary',
        color: 't2',
        estado: 'activo'
      },
      {
        nombre: 'KOTLIN',
        posicion: 'pos-z',
        ruta: 'kotlin',
        colorFondo: 'bg-secondary',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'KUBERNETES',
        posicion: 'pos-z',
        ruta: 'kubernetes',
        colorFondo: 'bg-secondary',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'LINUX',
        posicion: 'rot-2',
        ruta: 'linux',
        colorFondo: 'bg-secondary',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'NET FRAMEWORK',
        posicion: 'rot-2',
        ruta: 'net-framework',
        colorFondo: 'bg-secondary',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'PHP',
        posicion: 'rot-2',
        ruta: 'php',
        colorFondo: 'bg-secondary',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'REACT',
        posicion: 'rot-2',
        ruta: 'react',
        colorFondo: 'bg-secondary',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'SENA',
        posicion: 'rot-2',
        ruta: 'sena',
        colorFondo: 'bg-secondary',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'DB',
        posicion: 'rot-2',
        ruta: 'db',
        colorFondo: 'bg-secondary',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'WORDPRESS',
        posicion: 'rot-2',
        ruta: 'wordpress',
        colorFondo: 'bg-secondary',
        color: 'text-light',
        estado: 'activo'
      },
    ]

  }

  private extraerMenu(referencias: string[]):any[]{
    let menu:any[]=[];
    referencias.forEach( (e:any, i:number) => {
      let categorias = this.posts.filter( elemento => elemento.nombre === e)
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

  public reduccirTexto(cantPalabras: number, maxPalabra: number, textoCompleto: string): string{
    return reduccionTexto(cantPalabras, maxPalabra, textoCompleto)
  }

  public filtrarActivo(grupo: DatosPost[]):DatosPost[]{
    return grupo.filter( publi => publi.estado === 'activo' )
  }

  public validarActivo(estado: string):boolean{
    return estado === 'activo'? true : false
  }

}
