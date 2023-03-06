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

export interface DatosCategoria {
    nombre: string,
    color: string,
    fondo: string,
    ruta:  string,
    rutaIcono:  string
}

export interface DatosPost{
    id: string,
    titulo: string,
    descripcion: string,
    descripcionCorta: string,
    ruta: string,
    componente: string,
    mostrarEnPostHome: boolean,
    estilos: EstilosPost,
    fechaCreacion: string,
    fechaActualizacion: string,
    imgHorizontal: string,
    pixabay?: ImgHorizontal,
    imgVertical: string,
    imgCuadro:string,
    categoria: DatosCategoria,
    imgSlider?: ImgSlider
    estado?: string
}

export interface ImgSlider {
    alt: string,
    height: string,
    id: string,
    ruta: string,
    width: string,
    post?: string
}

export interface EstilosPost{
    color: string
}

export interface ImgHorizontal {
    autor: string,
    pathAutor: string,
    pixabay: string,
    pathPixabay: string
}

export interface CategoriaPostModel {
    id:number,
    categoria: string,
    abertura: string,
    rutaIcono: string,
    alturaIcono: string,
    estado: string,
    rutaCategoria: string,
    colorFondo: string,
    color: string,
    descripcion: string,
    descripcionCorta: string,
    posts: DatosPost[],
    subcategorias: SubCategoriaModel[]
}

export interface SubCategoriaModel {
    subCategoria: string,
    posts: DatosPost[]
}