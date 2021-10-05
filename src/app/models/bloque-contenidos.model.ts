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
    rutaRecurso?: string = '';
    descripcion?: string = '';
    red?: string = ''
}
