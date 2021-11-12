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

    this.pasoDeIndice = [
      {
        nombre: 'ANDROID STUDIO',
        posicion: 'pos-z',
        rutaExterna: 'android-studio',
        fondo: 'bg-Android',
        colorTexto: 'text-light'
      },
      {
        nombre: 'REDES DEV',
        posicion: 'rot-2',
        rutaExterna: 'redes-dev',
        fondo: 'bg-light',
        colorTexto: 't2'
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
