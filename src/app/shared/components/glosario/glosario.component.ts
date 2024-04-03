import { Component, OnInit, Input } from '@angular/core';
import { GlosarioModel, CategoriaPostModel } from '../../models/categorias.model';
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
  public anchoPantalla = window.innerWidth;
  public postPorPantalla: string[] = ['9','18'];
  public categoriasBuscar: string[]=['angular','developer'];

  constructor() { }

  ngOnInit(): void {
    let gruposCategorias: CategoriaPostModel[] = []; 
    this.categoriasBuscar.forEach((e)=>{
      let grupo = CATEGORIA.filter((cat:CategoriaPostModel) => cat.nombre === e)[0];
      gruposCategorias.push(grupo);
    });
    console.log(gruposCategorias, 'GRUPOS CATEGORIAS');
    let prueba:GlosarioModel[]=[];

    for(let i=0; i < gruposCategorias.length; i++){
     this.glosario.push(...gruposCategorias[i].glosario);
    }

    // let grupoDatos = f.glosario.filter((ref) => ref.mostrar);
    // console.log(grupoDatos, 'GRUPO DATOS');
    // this.glosario = this.glosario.concat(f.glosario);
    
    console.log(this.glosario, 'GLOSARIO');

    this.datosCategoria = CATEGORIA.filter((cat:CategoriaPostModel) => cat.nombre === this.categoria)[0];

    this.glosarioCache = this.glosario;
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

  public recibirCantidadElementos(e:any){
    this.glosario = this.glosarioCache = Object.assign([], e);
  }
}