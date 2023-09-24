import { Component, Input, OnInit } from '@angular/core';
import { CATEGORIA } from '../../../constants/categorias/categoria.constant';
import { DatosPost, CategoriaPostModel, SubCategoriaModel } from '../../models/categorias.model';
import { datosCategoria } from '../../constants/funciones/funciones-globales';

@Component({
  selector: 'app-galeria-post',
  templateUrl: './galeria-post.component.html',
  styleUrls: ['./galeria-post.component.css']
})
export class GaleriaPostComponent implements OnInit {

  @Input() itemIniciales: number = 0;

  public categorias = CATEGORIA
  public grupoGaleria: any[] = [];
  public postPorPantalla: string[] = ['9','18'];
  public todosLosPost: DatosPost[] = [];
  public postPaginar: DatosPost[] = [];
  public ultimosPost: any[] = [];
  public anchoPantalla = window.innerWidth;

  constructor() { }

  ngOnInit(): void {
    this.agruparPost();
  }

  public cargarGrupoGaleria():any[] {
    let grupo: any[] = [];



    return grupo
  }

  private agruparPost(){

    this.categorias.forEach( (e:CategoriaPostModel, i:number)=>{
      e.post.forEach((element:any) => {
        this.todosLosPost.push(element);
      });
      e.subcategorias.forEach((s:SubCategoriaModel) => {
        s.post.forEach((p: DatosPost) => {
          this.todosLosPost.push(p);
        });
      })
      
/*       e.subcategorias[i].post?.forEach((s:DatosPost) => {
        this.todosLosPost.push(s);
      }); */
    });

    this.todosLosPost = Object.assign([], this.retirarPostsPrincipalCategoria(this.todosLosPost));
    this.todosLosPost = Object.assign([], this.ordenarPostPorFecha(this.todosLosPost));
  }

  private retirarPostsPrincipalCategoria(grupo:DatosPost[]):DatosPost[]{
    return grupo.filter( element => 
      element.mostrarEnPostHome
    )
  }

  private ordenarPostPorFecha(grupo: DatosPost[]):DatosPost[]{

    let ordenados = grupo.sort( (a:DatosPost, b:DatosPost) =>  
      this.convertirFechaANumero(b.fechaActualizacion) - this.convertirFechaANumero(a.fechaActualizacion)
    );
    return ordenados;
  }

  public convertirFechaANumero(fecha:string):number{
    let numero = +(new Date(fecha).getTime());
    return +numero;
  }

  public tipoSombra(path: string):string{
    let sombra='shadow-two';

    if(path.includes('png')){
      sombra = 'drop'
    }
    return sombra
  }

  public recibirCantidadElementos(e:any){
    this.postPaginar = Object.assign([], e);
  }

  public retornarDatoCategoria(categoria: string, referencia: number): string{
    return datosCategoria(categoria,referencia);
  }

}
