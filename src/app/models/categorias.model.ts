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
    color?: string = '';
}

export class PostMasModel {
    subCategoria: string = '';
    post: PostsModel [] = [];
    color?: string = ''
}

export class ClipboardModel {
    valorUno: string;
    valorDos?: string;
    valorTres?: string;
    valorCuatro?: string;
    valorCinco?: string;
    valorSeis?: string;
    valorSiete?: string;
    valorOcho?: string;
    valorNueve?: string;
    valorDiez?: string;
    constructor(){
        this.valorUno = '';
        this.valorDos = '';
        this.valorTres = '';
        this.valorCuatro = '';
        this.valorCinco = '';
        this.valorSeis = '';
        this.valorSiete = '';
        this.valorOcho = '';
        this.valorNueve = '';
        this.valorDiez = '';
    }
}