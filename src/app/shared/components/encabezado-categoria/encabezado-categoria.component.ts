import { Component, OnInit, Input } from '@angular/core';
import { CategoriaPostModel, DatosPost, GlosarioModel } from '../../../models/categorias.model';
import { CATEGORIA } from '../../../constants/categorias/categoria.constant';
import { IndiceDeContenidosModel } from '../../../models/indice.model';

@Component({
  selector: 'app-encabezado-categoria',
  templateUrl: './encabezado-categoria.component.html',
  styleUrls: ['./encabezado-categoria.component.css']
})
export class EncabezadoCategoriaComponent implements OnInit {

  @Input() nombreCategoria : string = '';

  public indice: IndiceDeContenidosModel [] = [];
  public glosario: GlosarioModel[] = [];

  public categoria = new CategoriaPostModel();


  constructor() {
  }
  
  ngOnInit(): void {
    this.categoria = CATEGORIA.filter((cat: CategoriaPostModel) => cat.nombre === this.nombreCategoria)[0];
    let post: DatosPost[] = this.categoria.post;
    post.forEach( (post:DatosPost, i:number ) => {
      let seleccionado: IndiceDeContenidosModel = {
        color: '',
        colorFondo: post.estilos.colorFondo,
        estado: post.estado,
        nombre: post.nombre,
        posicion: post.posicion,
        ruta: post.ruta,
        rutaInterna: ''
      }
      this.indice.push(seleccionado)
    });

    this.categoria? this.glosario = this.categoria.glosario : [];

  }

}
