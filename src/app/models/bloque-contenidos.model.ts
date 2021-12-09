export class BloqueContenidoModel {

    id: string = '';
    titulo: string = '';
    contenidoIcons: boolean = false;
    bloque: GrupoLinks [] = [];

}

export class GrupoLinks {
    index: string = '';
    links: LinksModel [] = [];
}

export class LinksModel {

    img?: string = '';
    nombreRecurso?: string = '';
    height?: string = '';
    rutaRecurso?: any;
    descripcion?: string = '';
    red?: string = '';
    rutaAdicional?: string = '';
    clipBoard?: any;
    mediaQuery?: any;
}
