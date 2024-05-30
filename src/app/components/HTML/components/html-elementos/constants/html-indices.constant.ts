import { IndiceDeContenidosModel } from "@shared/models/indice.model";

export const INDICES_HTML:IndiceDeContenidosModel[] = [
    {
        nombre: '<html>',
        posicion: 'pos-z',
        ruta: '',
        rutaInterna: 'idHtml',
        colorFondo: 'bg-Html',
        color: 'text-light',
        estado: 'activo'
    },
    {
        nombre: '<head>',
        posicion: 'pos-z',
        ruta: '',
        rutaInterna: 'idHead',
        colorFondo: 'bg-Dark',
        color: 'c-Html',
        estado: 'activo'
    },
    {
        nombre: '<meta>',
        posicion: 'pos-z',
        ruta: '',
        rutaInterna: 'idMeta',
        colorFondo: 'bg-Html',
        color: 'text-light',
        estado: 'activo'
    },
    {
        nombre: '<h1>,<h2>... <h6>',
        posicion: 'pos-z',
        ruta: '',
        rutaInterna: 'idEncabezados',
        colorFondo: 'bg-light',
        color: 'c-Html',
        estado: 'activo'
    },
    {
        nombre: '<p>',
        posicion: 'pos-z',
        ruta: '',
        rutaInterna: 'idP',
        colorFondo: 'bg-Html',
        color: 'text-light',
        estado: 'activo'
    },
    {
        nombre: '<br>',
        posicion: 'pos-z',
        ruta: '',
        rutaInterna: 'idBr',
        colorFondo: 'bg-Dark',
        color: 'c-Html',
        estado: 'activo'
    },
    {
        nombre: '<pre>',
        posicion: 'pos-z',
        ruta: '',
        rutaInterna: 'idPre',
        colorFondo: 'bg-Html',
        color: 'text-light',
        estado: 'activo'
    },
    {
        nombre: '<mark>',
        posicion: 'pos-z',
        ruta: '',
        rutaInterna: 'idMark',
        colorFondo: 'bg-light',
        color: 'c-Html',
        estado: 'activo'
    },
    {
        nombre: '<b>, <strong>',
        posicion: 'pos-z',
        ruta: '',
        rutaInterna: 'idStrong',
        colorFondo: 'bg-Html',
        color: 'text-light',
        estado: 'activo'
    },
    {
        nombre: '<i>, <em>',
        posicion: 'pos-z',
        ruta: '',
        rutaInterna: 'idEm',
        colorFondo: 'bg-Dark',
        color: 'c-Html',
        estado: 'activo'
    },
]