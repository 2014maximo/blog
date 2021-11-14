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