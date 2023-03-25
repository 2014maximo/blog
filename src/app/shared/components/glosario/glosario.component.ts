import { Component, OnInit, Input } from '@angular/core';
import { GlosarioModel, CategoriaPostModel } from '../../../models/categorias.model';
import { CATEGORIA } from '../../../constants/categorias/categoria.constant';
import { busquedaGeneral } from '../../constants/funciones/funciones-globales';

@Component({
  selector: 'app-glosario',
  templateUrl: './glosario.component.html',
  styleUrls: ['./glosario.component.css']
})
export class GlosarioComponent implements OnInit {

  @Input() categoria : string = '';

  public datosCategoria = new CategoriaPostModel();
  public glosario:GlosarioModel[] = [];
  public glosarioCache:GlosarioModel[] = [];

  constructor() { }

  ngOnInit(): void {
    this.datosCategoria = CATEGORIA.filter((cat:CategoriaPostModel) => cat.nombre === this.categoria)[0];
    this.glosario = this.glosarioCache = this.datosCategoria.glosario;
  }

  public esPar(numero: any): boolean{
    return (numero % 2) == 0;
  }

  public buscarTermino(e: any){
    let consulta:GlosarioModel[] = [];
    // consulta = this.glosarioCache.filter((dato: GlosarioModel) => dato.titulo.includes(e.srcElement.value))
    consulta = busquedaGeneral(this.glosarioCache, 'titulo', e.srcElement.value)
      this.glosario = Object.assign([], consulta);
  }

  public borrarBusqueda(e: any){
    setTimeout(()=>{
      if(!e.srcElement.value){
        this.glosario = Object.assign([], this.glosarioCache);
      }
    },500)
  }
}
