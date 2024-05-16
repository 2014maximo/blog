import { Component, OnInit } from '@angular/core';
import { CATEGORIA } from '@constants/index';
import { postActual } from '@shared/constants';
import { cargarBreadcrumb, cargarIndice } from '@shared/constants/funciones/funciones-globales';
import { CategoriaModel } from '@shared/models';
import { CategoriaPostModel, DatosPost } from '@shared/models/categorias.model';
import { IndiceDeContenidosModel } from '@shared/models/indice.model';
import { KOTLIN_ELEMENTOS_ARRAYS, KOTLIN_ELEMENTOS_COERCION_IMPLICIT, KOTLIN_ELEMENTOS_C_VACIAS, KOTLIN_ELEMENTOS_FUNCIONES, KOTLIN_ELEMENTOS_INTER_CADENAS, KOTLIN_ELEMENTOS_MAPS, KOTLIN_ELEMENTOS_OPER_RANGO, KOTLIN_ELEMENTOS_OPER_RANGO_INCLUS, KOTLIN_ELEMENTOS_RETURN_TUPLA, KOTLIN_ELEMENTOS_VAR, KOTLIN_ELEMENTOS_VAR_IMPLICIT } from './constants/kotlin-elementos.constant';

@Component({
  selector: 'app-kotlin-elementos',
  templateUrl: './kotlin-elementos.component.html',
  styleUrls: ['./kotlin-elementos.component.css']
})
export class KotlinElementosComponent implements OnInit {

  public idPublicacion = '4310addc-5bed-49b2-9d60-76a1c58b1881';
  public indiceTypescript: IndiceDeContenidosModel [] = [];
  public publicacion = new DatosPost();
  public categoria = new CategoriaPostModel();
  public breadcrumb = new CategoriaModel();
  public variablesCode = KOTLIN_ELEMENTOS_VAR;
  public variablesImplicitos = KOTLIN_ELEMENTOS_VAR_IMPLICIT;
  public coercionImplicita = KOTLIN_ELEMENTOS_COERCION_IMPLICIT;
  public interpolacion = KOTLIN_ELEMENTOS_INTER_CADENAS;
  public operadorRango = KOTLIN_ELEMENTOS_OPER_RANGO;
  public operadorRangoInclusivo = KOTLIN_ELEMENTOS_OPER_RANGO_INCLUS;
  public arrays = KOTLIN_ELEMENTOS_ARRAYS;
  public maps = KOTLIN_ELEMENTOS_MAPS;
  public coleccionesVacias = KOTLIN_ELEMENTOS_C_VACIAS;
  public funciones = KOTLIN_ELEMENTOS_FUNCIONES;
  public returnTupla = KOTLIN_ELEMENTOS_RETURN_TUPLA;

  constructor() { }

  ngOnInit(): void {
    this.publicacion = postActual(this.idPublicacion)[0];
    this.categoria = CATEGORIA.filter( e => e.nombre === this.publicacion.categoria)[0];
    this.indiceTypescript = cargarIndice(this.publicacion);
    this.breadcrumb = cargarBreadcrumb(this.publicacion);
  }

  public scroll(el: HTMLElement){
    el.scrollIntoView();
  }

}
