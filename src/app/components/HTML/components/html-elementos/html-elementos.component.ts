import { Component, OnInit } from '@angular/core';
import { CATEGORIA } from '@constants/index';
import { postActual } from '@shared/constants';
import { cargarBreadcrumb, cargarIndice } from '@shared/constants/funciones/funciones-globales';
import { CategoriaModel } from '@shared/models';
import { CategoriaPostModel, DatosPost } from '@shared/models/categorias.model';
import { IndiceDeContenidosModel } from '@shared/models/indice.model';
import * as HTML from './constants/html-templates.constant';
import { HTML_meta_example_1 } from './constants/html-templates.constant';
import { URL } from '@shared/constants/constants/generales.constant';
import { INDICES_HTML } from './constants/html-indices.constant';

@Component({
  selector: 'app-html-elementos',
  templateUrl: './html-elementos.component.html',
  styleUrls: ['./html-elementos.component.css']
})
export class HtmlElementosComponent implements OnInit {

  public idPublicacion = '4ca90899-3cfc-455d-a4e3-9b529d80e06f';
  public indiceTypescript: IndiceDeContenidosModel [] = [];
  public publicacion = new DatosPost();
  public categoria = new CategoriaPostModel();
  public breadcrumb = new CategoriaModel();
  public url = URL;
  public h1 = HTML.HTML_H1;
  public h1Html = HTML.HTML_1;
  public head = HTML.HTML_head;
  public html = HTML.HTML;
  public html4 = HTML.HTML_4;
  public html_XHTML = HTML.HTML_XHTML;
  public html_html = HTML.HTML_html;
  public HTML_head_example = HTML.HTML_head_example;
  public HTML_meta_example_1 = HTML.HTML_meta_example_1;
  public HTML_meta_example_2 = HTML.HTML_meta_example_2;
  public HTML_meta_example_3 = HTML.HTML_meta_example_3;
  public HTML_meta_example_4 = HTML.HTML_meta_example_4;
  public HTML_meta_example_5 = HTML.HTML_meta_example_5;
  public HTML_p = HTML.HTML_text;
  public HTML_p_s = HTML.HTML_text_style;
  public HTML_p_br = HTML.HTML_text_br;
  public HTML_pre = HTML.HTML_text_pre;
  public HTML_pre_ = HTML.HTML_text_pre_;

  public pasoDeIndice: IndiceDeContenidosModel [] = [];
  public claseContenedor: string = '';

  constructor() { }

  ngOnInit(): void {
    this.publicacion = postActual(this.idPublicacion)[0];
    this.categoria = CATEGORIA.filter( e => e.nombre === this.publicacion.categoria)[0];
    this.indiceTypescript = cargarIndice(this.publicacion);
    this.breadcrumb = cargarBreadcrumb(this.publicacion);
    this.pasoDeIndice = INDICES_HTML;
  }

  public scroll(el: HTMLElement){
    el.scrollIntoView();
  }

}
