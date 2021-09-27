export class HeaderPostModel {
    
    rutaImagen: string = '';
    fondo: boolean = false;
    tituloPost: string = '';
    alturaImagen: string = '';

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
    contenido?: string = '';
    contenidoLista?:[] = [];
}