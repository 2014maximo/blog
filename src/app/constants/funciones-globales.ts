import { Route } from '@angular/router';
import { PostModel } from '../models/post.model';

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

export function extraerListaRutas(categoria:[]):Route[]{
  let rutas:Route[]=[];

  for(let i=0; i < categoria.length; i++){
    
  }

  return rutas
}

export function busquedaGeneral(array: any, bloque: string, palabra: string){
  var dato = array;
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

