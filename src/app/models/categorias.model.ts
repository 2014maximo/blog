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

export class DatosPost{
    id: string;
    posicion: string;
    nombre: string;
    descripcion: string;
    descripcionCorta: string;
    ruta: string;
    componente: string;
    mostrarEnPostHome: boolean;
    estilos: EstilosPost;
    fechaCreacion: string;
    fechaActualizacion: string;
    imgHorizontal: string;
    pixabay?: ImgHorizontal;
    imgVertical: string;
    imgCuadro:string;
    categoria: string;
    imgSlider?: ImgSlider;
    estado: string;

    constructor(){
        this.id = '';
        this.posicion = '';
        this.nombre = '';
        this.descripcion = '';
        this.descripcionCorta = '';
        this.ruta = '';
        this.componente = '';
        this.mostrarEnPostHome = false;
        this.estilos = {
            color: '',
            colorFondo: ''
        };
        this.fechaCreacion = '';
        this.fechaActualizacion = '';
        this.imgHorizontal = '';
        this.pixabay = {
            autor: '',
            pathAutor: '',
            pathPixabay: '',
            pixabay: ''
        },
        this.imgVertical = '';
        this.imgCuadro = '';
        this.categoria = '';
        this.imgSlider = {
            alt: '',
            height: '',
            id: '',
            ruta: '',
            width: ''
        },
        this.estado = '';
    }
}

export class GlosarioModel {
    id: string;
    titulo: string;
    linkReferencia: string;
    descripcion: string[];

    constructor(){
        this.id = '';
        this.titulo = '';
        this.linkReferencia = '';
        this.descripcion = []
    }
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

export class CategoriaPostModel {
    id:number;
    nombre: string;
    posicion: string;
    abertura: string;
    rutaIcono: string;
    alturaIcono: string;
    estado: string;
    ruta: string;
    colorFondo: string;
    color: string;
    glosario: GlosarioModel[];
    descripcion: DescripcionModel[];
    descripcionCorta: string;
    post: DatosPost[];
    subcategorias: SubCategoriaModel[];

    constructor() {
        this.abertura = '';
        this.alturaIcono = '';
        this.color = '';
        this.colorFondo = '';
        this.descripcion = [];
        this.descripcionCorta = '';
        this.estado = '';
        this.glosario = [];
        this.id = 0,
        this.nombre = '';
        this.posicion = '';
        this.post = [];
        this.rutaIcono = '';
        this.ruta = '';
        this.subcategorias = []
    }
}

export interface DescripcionModel {
    autor: string,
    descripciones: string[]
}

export interface SubCategoriaModel {
    subCategoria: string,
    post: DatosPost[]
}