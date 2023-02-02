import { Component, OnInit } from '@angular/core';
import { CATEGORIA } from '../../constants/categoria.constant';
import { DatosPost } from '../../models/categorias.model';

@Component({
  selector: 'app-galeria-post',
  templateUrl: './galeria-post.component.html',
  styleUrls: ['./galeria-post.component.css']
})
export class GaleriaPostComponent implements OnInit {

  public categorias = CATEGORIA
  public grupoGaleria: any[] = [];
  public postPorPantalla: string[] = ['9','18'];
  public todosLosPost: DatosPost[] = [];
  public postPaginar: any[] = [];
  public ultimosPost: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.agruparPost();
  }

  public cargarGrupoGaleria():any[] {
    let grupo: any[] = [];



    return grupo
  }

  private agruparPost(){

    this.categorias.forEach( (e:any, i:number)=>{
      e.posts.forEach((element:any) => {
        this.todosLosPost.push(element);
      });
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
      this.convertirFechaANumero(a.fechaActualizacion) - this.convertirFechaANumero(b.fechaActualizacion)
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

}
