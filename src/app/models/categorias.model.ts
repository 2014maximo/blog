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
    posicion: string,
    nombre: string,
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
    categoria: string,
    imgSlider?: ImgSlider,
    estado: string
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
    color: string,
    colorFondo: string
}

export interface ImgHorizontal {
    autor: string,
    pathAutor: string,
    pixabay: string,
    pathPixabay: string
}

export interface CategoriaPostModel {
    id:number,
    nombre: string,
    posicion: string,
    abertura: string,
    rutaIcono: string,
    alturaIcono: string,
    estado: string,
    ruta: string,
    colorFondo: string,
    color: string,
    descripcion: string,
    descripcionCorta: string,
    post: DatosPost[],
    subcategorias: SubCategoriaModel[]
}

export interface SubCategoriaModel {
    subCategoria: string,
    post: DatosPost[]
}