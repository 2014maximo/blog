export class CategoriasModel {
    
    id:number = 0;
    categoria: string = '';
    rutaCategoria: string = '';
    rutaIcono: string = '';
    alturaIcono: string = '';
    color: string = '';
    post: PostsModel [] = [];
    postMas?:PostMasModel [] = [];
    
}

export class PostsModel {
    nombre: string = '';
    posicion: string = '';
    ruta: string = '';
    activo: boolean = false;
}

export class PostMasModel {
    subCategoria: string = '';
    post: PostsModel [] = [];
}