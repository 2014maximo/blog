import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../shared/models/post.model';
import { IndiceDeContenidosModel } from '../../../shared/models/indice.model';
import { ANGULAR } from '../../../constants/publicaciones/posts-angular.constant';
import { DatosPost } from '../../../shared/models/categorias.model';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  public idPost: string = 'eb4011f5-81df-4261-b5c5-8f58d2ba88b5'

  constructor() {
  }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }


}
