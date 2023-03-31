import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';
import { traerPost } from '../../../shared/constants/funciones/funciones-globales';
import { POSTS } from '../../../constants/post.constant';
import { rutaCatego } from '../../../constants/globales.constant';
import { CategoriaModel } from '../../../models/post.model';

@Component({
  selector: 'app-flutter-elementos',
  templateUrl: './flutter-elementos.component.html',
  styleUrls: ['./flutter-elementos.component.css']
})
export class FlutterElementosComponent implements OnInit {

  public cabeceraPost = traerPost('flutter-elementos', POSTS) || new PostModel;

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
