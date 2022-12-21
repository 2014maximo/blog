import { Component, OnInit } from '@angular/core';
import { CATEGORIA } from '../../constants/categoria.constant';

@Component({
  selector: 'app-galeria-post',
  templateUrl: './galeria-post.component.html',
  styleUrls: ['./galeria-post.component.css']
})
export class GaleriaPostComponent implements OnInit {

  public categorias = CATEGORIA
  public grupoGaleria:any[]=[];
  public todosLosPost:any[]=[];
  public ultimosPost: any[]=[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.agruparPost())
  }

  public cargarGrupoGaleria():any[]{
    let grupo: any[]=[];



    return grupo
  }

  private agruparPost(){

    this.categorias.forEach( (e:any, i:number)=>{
      e.posts.forEach((element:any) => {
        this.todosLosPost.push(element);
      });;
    });
    console.log(this.todosLosPost);
  }

}
