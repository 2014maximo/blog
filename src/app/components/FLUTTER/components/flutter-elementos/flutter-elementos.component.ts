import { Component, OnInit } from '@angular/core';
import { rutaCatego } from '@constants/generales/globales.constant';
import { POSTS } from '@constants/post.constant';
import { traerPost } from '@shared/constants';
import { CategoriaModel, PostModel } from '@shared/models/post.model';

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
