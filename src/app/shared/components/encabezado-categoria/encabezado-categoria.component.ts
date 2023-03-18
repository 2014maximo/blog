import { Component, OnInit, Input } from '@angular/core';
import { CategoriaPostModel } from '../../../models/categorias.model';
import { CATEGORIA } from '../../../constants/categorias/categoria.constant';
import { pipe, of } from 'rxjs';

@Component({
  selector: 'app-encabezado-categoria',
  templateUrl: './encabezado-categoria.component.html',
  styleUrls: ['./encabezado-categoria.component.css']
})
export class EncabezadoCategoriaComponent implements OnInit {

  @Input() nombreCategoria : string = '';

  public categoria: CategoriaPostModel = {
    abertura: '',
    alturaIcono: '',
    color: '',
    colorFondo: '',
    descripcion: [],
    descripcionCorta: '',
    estado: '',
    glosario: [],
    id: 0,
    nombre: '',
    posicion: '',
    post: [],
    ruta: '',
    rutaIcono: '',
    subcategorias: []
  }


  constructor() {
  }
  
  ngOnInit(): void {
    this.categoria = CATEGORIA.filter((cat: CategoriaPostModel) => cat.nombre === this.nombreCategoria)[0];
  }

}
