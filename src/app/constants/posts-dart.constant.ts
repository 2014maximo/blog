import { DatosPost, EstilosPost } from '../models/categorias.model';

export const ESTILO_DART: EstilosPost = {
    color: 'c-Dart',
    colorFondo: 'bg-Dart'
}

export const DART: DatosPost[] = [
    {
        id: '2288525419',
        nombre: 'Dart',
        descripcion: 'Dart con sus altibajos, entra de nuevo al ruedo con Flutter, sin embargo es importante saber que ventajas nos ofrece sobre otros lenguajes para poder elegirlo.',
        descripcionCorta: 'Dart con sus altibajos, entra de nuevo al ruedo con Flutter, sin embargo es importante saber que ventajas nos ofrece sobre otros lenguajes para poder elegirlo.',
        ruta: '',
        componente: '',
        categoria: 'dart',
        mostrarEnPostHome: false,
        estilos: ESTILO_DART,
        fechaCreacion: '2021-02-02',
        fechaActualizacion: '2022-10-02',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-2',
        activo: false
    },
    {
        id: '3263410188',
        nombre: 'Dart, descripción de los elementos del lenguaje',
        descripcion: 'Sabemos sin mucho cuento que elementos básicos trae un lenguaje de programación, sin embargo cada lenguaje parece tener una sintaxis diferente en algunos detalles, teniendo en cuenta esto miremos como opera Dart',
        descripcionCorta: '',
        ruta: '',
        componente: '',
        categoria: 'dart',
        mostrarEnPostHome: true,
        estilos: ESTILO_DART,
        fechaCreacion: '2021-05-02',
        fechaActualizacion: '2021-05-02',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/dart/elementos-dart.jpg',
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-z',
        activo: true
    }
]