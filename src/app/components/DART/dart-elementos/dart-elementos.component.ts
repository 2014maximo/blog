import { Component, OnInit } from '@angular/core';
import { CategoriaModel, PostModel } from '../../../models/post.model';
import { traerPost } from '../../../constants/funciones-globales';
import { POSTS } from '../../../constants/post.constant';
import { rutaCatego } from '../../../constants/globales.constant';

@Component({
  selector: 'app-dart-elementos',
  templateUrl: './dart-elementos.component.html',
  styleUrls: ['./dart-elementos.component.css']
})
export class DartElementosComponent implements OnInit {

  public cabeceraPost = traerPost('dart-0002', POSTS) || new PostModel;

  public rutaCatego: string = rutaCatego;

  public breadcrumb: CategoriaModel = {
    activo: this.cabeceraPost.mostrarBreadcrumb,
    categoria: this.cabeceraPost.categoria,
    colorText: this.cabeceraPost.colorText,
    ruta: this.cabeceraPost.categoria,
  }


  constructor() {
    this.inicializarVariables();
  }
  private inicializarVariables() {
    
  }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
