export class BloqueContenidoModel {

    id: string = '';
    titulo: string = '';
    contenidoIcons: boolean = false;
    bloque: linksModel [] = [] 

}

export class linksModel {
    img?: string = '';
    nombreRecurso?: string = '';
    height?: string = '';
    rutaRecurso?: string = '';
    descripcion?: string = '';
    red?: string = ''
}