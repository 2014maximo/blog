import { Route } from '@angular/router';
import { PostModel } from '../models/post.model';
import { CATEGORIA } from './categoria.constant';
import { CategoriaPostModel, DatosCategoria } from '../models/categorias.model';

export function copiarAlPortapapeles(cadenaAlclipboard: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = cadenaAlclipboard;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

export function traerPost(id: string, posts: PostModel[]){
  return posts.find( post => post.id_post === id);
}

export function postActual(idPost: string){
  let post:any[]=[];
  CATEGORIA.forEach((e:any, i:number)=>{
    e.posts.forEach((element:any) => {
      post.push(element);
    });
  });
  return post.filter((element:any) => element.id === idPost);
}

export function extraerListaRutas(categoria:[]):Route[]{
  let rutas:Route[]=[];

  for(let i=0; i < categoria.length; i++){
    
  }

  return rutas
}

export function busquedaGeneral(array: any, bloque: string, palabra: string){

  return array.filter((element:any) => element[bloque].toUpperCase()
  .replace("Á", "A")
  .replace("É", "E")
  .replace("Í", "I")
  .replace("Ó", "O")
  .replace("Ú", "U")
  .replace("Ü", "U")
  .includes(palabra.toUpperCase()
    .replace("Á", "A")
    .replace("É", "E")
    .replace("Í", "I")
    .replace("Ó", "O")
    .replace("Ú", "U")
    .replace("Ü", "U")));
          
}

export function datosCategoria(categoria: string, referencia: string, referenciaHija: string){
  let fichaCategoria: DatosCategoria;
  
  let categoriaFiltrada: CategoriaPostModel[] = CATEGORIA.filter(( categoria: CategoriaPostModel ) => {
    return categoria.categoria === referencia
  });

  categoriaFiltrada;
}

