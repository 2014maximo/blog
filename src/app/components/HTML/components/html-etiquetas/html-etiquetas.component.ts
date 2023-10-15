import { Component, OnInit } from '@angular/core';
import { CATEGORIA } from '@constants/index';
import { postActual } from '@shared/constants';
import { cargarBreadcrumb, cargarIndice } from '@shared/constants/funciones/funciones-globales';
import { CategoriaModel } from '@shared/models';
import { CategoriaPostModel, DatosPost } from '@shared/models/categorias.model';
import { IndiceDeContenidosModel } from '@shared/models/indice.model';

@Component({
  selector: 'app-html-etiquetas',
  templateUrl: './html-etiquetas.component.html',
  styleUrls: ['./html-etiquetas.component.css']
})
export class HtmlEtiquetasComponent implements OnInit {
  public idPost = '2b9d0c67-2262-4f96-8179-483d21f71967';

  constructor() { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
