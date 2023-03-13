import { DatosPost, EstilosPost } from '../models/categorias.model';

export const ESTILO_JAVASCRIPT: EstilosPost = {
    color: 'c-Javascript',
    colorFondo: 'bg-Javascript'
}


export const JAVASCRIPT: DatosPost[] = [
    {
        id: '3574124706',
        nombre: 'JAVASCRIPT',
        descripcion: '',
        descripcionCorta: '',
        ruta: 'javascript',
        componente: 'JavascriptComponent',
        categoria: 'javascript',
        mostrarEnPostHome: false,
        estilos: ESTILO_JAVASCRIPT,
        fechaCreacion: '2020-04-04',
        fechaActualizacion: '2020-04-04',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-1',
        estado: 'inactivo'
    },
    {
        id: '6525710784',
        nombre: 'Javascript elementos',
        descripcion: '',
        descripcionCorta: '',
        ruta: 'js-elementos',
        componente: 'JsElementosComponent',
        categoria: 'javascript',
        mostrarEnPostHome: true,
        estilos: ESTILO_JAVASCRIPT,
        fechaCreacion: '2023-01-11',
        fechaActualizacion: '2023-01-11',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/javascript/elementos-javascript.jpg',
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-2',
        estado: 'activo'
    },
    {
        id: '9468931626',
        nombre: 'Métodos para recorrido de arrays',
        descripcion: '',
        descripcionCorta: '',
        ruta: 'js-recorrer-arrays-objetos',
        componente: 'JsRecorrerArraysObjetosComponent',
        categoria: 'javascript',
        mostrarEnPostHome: true,
        estilos: ESTILO_JAVASCRIPT,
        fechaCreacion: '2022-05-07',
        fechaActualizacion: '2022-05-07',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/javascript/recorrido-arrays.jpg',
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-z',
        estado: 'activo'
    },
    {
        id: '8201690222',
        nombre: 'Trabajos útiles con fechas',
        descripcion: '',
        descripcionCorta: '',
        ruta: 'js-trabajo-fechas',
        componente: 'JsTrabajoFechasComponent',
        categoria: 'javascript',
        mostrarEnPostHome: true,
        estilos: ESTILO_JAVASCRIPT,
        fechaCreacion: '2021-04-02',
        fechaActualizacion: '2021-04-02',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/javascript/trabajos-utiles-fechas.jpg',
        pixabay:{
            autor: 'Dorothe',
            pathAutor: 'https://pixabay.com/users/darkmoon_art-1664300/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3204066',
            pathPixabay: 'https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3204066',
            pixabay: 'pixabay'
        },
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-1',
        estado: 'activo'
    },
    {
        id: '2651190438',
        nombre: 'Node JS',
        descripcion: '',
        descripcionCorta: '',
        ruta: 'js-node-js',
        componente: 'JsNodeJsComponent',
        categoria: 'javascript',
        mostrarEnPostHome: false,
        estilos: ESTILO_JAVASCRIPT,
        fechaCreacion: '2021-04-02',
        fechaActualizacion: '2021-04-02',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-2',
        estado: 'activo'
    },
    {
        id: '3047442958',
        nombre: 'Instalando NodeJS con NVM',
        descripcion: '',
        descripcionCorta: '',
        ruta: 'js-instalando-node-con-nvm',
        componente: 'JsInstalandoNodeConNvmComponent',
        categoria: 'javascript',
        mostrarEnPostHome: true,
        estilos: ESTILO_JAVASCRIPT,
        fechaCreacion: '2021-04-02',
        fechaActualizacion: '2021-04-02',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/javascript/nodejsNVM.jpg',
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-z',
        estado: 'activo'
    },
    {
        id: '7973823377',
        nombre: 'Elementos de Typescript',
        descripcion: '',
        descripcionCorta: '',
        ruta: 'js-typescript-elementos',
        componente: 'JsTypescriptElementosComponent',
        categoria: 'javascript',
        mostrarEnPostHome: true,
        estilos: ESTILO_JAVASCRIPT,
        fechaCreacion: '2021-04-02',
        fechaActualizacion: '2021-04-02',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/javascript/typescript-elementos.jpg',
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-1',
        estado: 'activo'
    },
]