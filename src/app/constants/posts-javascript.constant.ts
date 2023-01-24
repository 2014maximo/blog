import { DatosPost, DatosCategoria } from '../models/categorias.model';
const DATOS_CATEGORIA: DatosCategoria = {
    nombre: 'JAVASCRIPT',
    color: 'c-Javascript',
    fondo:'',
    path: 'javascript',
    rutaIcono:'assets/img/categorias/javascript.png'
}

export const JAVASCRIPT: DatosPost[] = [
    {
        id: '3574124706',
        titulo: 'JAVASCRIPT',
        descripcion: '',
        descripcionCorta: '',
        path: 'javascript',
        componente: 'JavascriptComponent',
        categoria: DATOS_CATEGORIA,
        mostrarEnPostHome: false,
        estilos: {
            color: ''
        },
        fechaCreacion: '01-01-2021',
        fechaActualizacion: '',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:''
    },
    {
        id: '6525710784',
        titulo: 'Javascript elementos',
        descripcion: '',
        descripcionCorta: '',
        path: 'js-elementos',
        componente: 'JsElementosComponent',
        categoria: DATOS_CATEGORIA,
        mostrarEnPostHome: true,
        estilos: {
            color: ''
        },
        fechaCreacion: '01-01-2021',
        fechaActualizacion: '',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/javascript/elementos-javascript.jpg',
        imgVertical:'',
        imgCuadro:''
    },
    {
        id: '9468931626',
        titulo: 'Métodos para recorrido de arrays',
        descripcion: '',
        descripcionCorta: '',
        path: 'js-recorrer-arrays-objetos',
        componente: 'JsRecorrerArraysObjetosComponent',
        categoria: DATOS_CATEGORIA,
        mostrarEnPostHome: true,
        estilos: {
            color: ''
        },
        fechaCreacion: '01-01-2021',
        fechaActualizacion: '',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/javascript/recorrido-arrays.jpg',
        imgVertical:'',
        imgCuadro:''
    },
    {
        id: '8201690222',
        titulo: 'Trabajos útiles con fechas',
        descripcion: '',
        descripcionCorta: '',
        path: 'js-trabajo-fechas',
        componente: 'JsTrabajoFechasComponent',
        categoria: DATOS_CATEGORIA,
        mostrarEnPostHome: true,
        estilos: {
            color: ''
        },
        fechaCreacion: '01-01-2021',
        fechaActualizacion: '',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/javascript/trabajos-utiles-fechas.jpg',
        pixabay:{
            autor: 'Dorothe',
            pathAutor: 'https://pixabay.com/users/darkmoon_art-1664300/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3204066',
            pathPixabay: 'https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3204066',
            pixabay: 'pixabay'
        },
        imgVertical:'',
        imgCuadro:''
    },
    {
        id: '2651190438',
        titulo: 'Node JS',
        descripcion: '',
        descripcionCorta: '',
        path: 'js-node-js',
        componente: 'JsNodeJsComponent',
        categoria: DATOS_CATEGORIA,
        mostrarEnPostHome: false,
        estilos: {
            color: ''
        },
        fechaCreacion: '01-01-2021',
        fechaActualizacion: '',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:''
    },
    {
        id: '3047442958',
        titulo: 'Instalando NodeJS con NVM',
        descripcion: '',
        descripcionCorta: '',
        path: 'js-instalando-node-con-nvm',
        componente: 'JsInstalandoNodeConNvmComponent',
        categoria: DATOS_CATEGORIA,
        mostrarEnPostHome: true,
        estilos: {
            color: ''
        },
        fechaCreacion: '01-01-2021',
        fechaActualizacion: '',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/javascript/nodejsNVM.jpg',
        imgVertical:'',
        imgCuadro:''
    },
    {
        id: '7973823377',
        titulo: 'Elementos de Typescript',
        descripcion: '',
        descripcionCorta: '',
        path: 'js-typescript-elementos',
        componente: 'JsTypescriptElementosComponent',
        categoria: DATOS_CATEGORIA,
        mostrarEnPostHome: true,
        estilos: {
            color: ''
        },
        fechaCreacion: '01-01-2021',
        fechaActualizacion: '',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/javascript/typescript-elementos.jpg',
        imgVertical:'',
        imgCuadro:''
    },
]