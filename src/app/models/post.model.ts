export class PostModel {
    id_post: string = '';
    nombre: string = '';
    categoria: string = '';
    ruta: string = '';
    rutaImagen: string = '';
    fechaCreacion: Date = new Date();
    fechaActualizacion: Date = new Date();
    incluirFondo: boolean = false;
    sombra: string = '';
    alturaImagen: string = '';
    mostrarBreadcrumb: boolean = true;
    colorText: string = 'tc-green-one'
}

export class HeaderPostModel {
    
    rutaImagen: string = '';
    fondo: boolean = false;
    tituloPost: string = '';
    alturaImagen: string = '';
    sombra?: string = '';

}
export class ObjectAccordeonPostModel {
    dataParent: string = '';
    content: AccordeonPostModel [] = []
}
export class AccordeonPostModel {
    idHeading: string = '';
    contentHead: string = '';
    idCollapse: string = '';
    contendBody: string = '';
}

export class AccordeonModel {
    nClass: string = '';
    elemento: string = '';
    mostrarlo?: boolean = false;
    contenido?: string = '';
    contenidoLista?: ListaModel[] = [];
}

export class ListaModel {
    indice?: string = '';
    contenido: string = ''
}

export class CategoriaModel {
    activo: boolean = false;
    categoria: string = '';
    ruta: string = '';
    colorText: string = '';
    nClass?: string = '';
    icon?: string = '';
}

export interface SliderModel {
    ruta: string,
    alt: string,
    height: string,
    width: string,
    id: string
}