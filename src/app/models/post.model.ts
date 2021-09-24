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
    idCollapse: string = '';

}