import { DatosPost, DatosCategoria } from '../models/categorias.model';

const DATOS_CATEGORIA: DatosCategoria = {
    nombre: 'DART',
    color: 'c-Dart',
    fondo:'',
    path: 'dart',
    rutaIcono:'assets/img/categorias/dart-logo.png'
}

export const DART: DatosPost[] = [
    {
        id: '2288525419',
        titulo: 'Dart',
        descripcion: 'Dart con sus altibajos, entra de nuevo al ruedo con Flutter, sin embargo es importante saber que ventajas nos ofrece sobre otros lenguajes para poder elegirlo.',
        descripcionCorta: 'Dart con sus altibajos, entra de nuevo al ruedo con Flutter, sin embargo es importante saber que ventajas nos ofrece sobre otros lenguajes para poder elegirlo.',
        path: '',
        componente: '',
        categoria: DATOS_CATEGORIA,
        mostrarEnPostHome: false,
        estilos: {
            color: ''
        },
        fechaCreacion: '2021-02-02',
        fechaActualizacion: '2022-10-02',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:''
    },
    {
        id: '3263410188',
        titulo: 'Dart, descripción de los elementos del lenguaje',
        descripcion: 'Sabemos sin mucho cuento que elementos básicos trae un lenguaje de programación, sin embargo cada lenguaje parece tener una sintaxis diferente en algunos detalles, teniendo en cuenta esto miremos como opera Dart',
        descripcionCorta: '',
        path: '',
        componente: '',
        categoria: DATOS_CATEGORIA,
        mostrarEnPostHome: true,
        estilos: {
            color: ''
        },
        fechaCreacion: '2021-05-02',
        fechaActualizacion: '2021-05-02',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/dart/elementos-dart.jpg',
        imgVertical:'',
        imgCuadro:''
    }
]