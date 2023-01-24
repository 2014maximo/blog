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
  }

  private retirarPostsPrincipalCategoria(grupo:DatosPost[]):DatosPost[]{
    return grupo.filter( element => 
      element.mostrarEnPostHome
    )
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
