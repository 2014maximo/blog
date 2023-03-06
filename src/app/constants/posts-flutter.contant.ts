import { DatosCategoria, DatosPost } from '../models/categorias.model';


const DATOS_CATEGORIA: DatosCategoria = {
    nombre: 'FLUTTER',
    color: 'c-Flutter',
    fondo:'',
    ruta: 'flutter',
    rutaIcono:'https://plantillas_dev.gitlab.io/assets/img/logos/logo-flutter.png'
}

export const FLUTTER: DatosPost[] = [
    {
        id: '9249441409',
        titulo: 'Flutter',
        descripcion: '',
        descripcionCorta: '',
        ruta: 'flutter',
        componente: 'FlutterComponent',
        mostrarEnPostHome: false,
        estilos: {
            color: ''
        },
        fechaCreacion: '2022-04-08',
        fechaActualizacion: '2022-04-08',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:'',
        categoria: DATOS_CATEGORIA
    },
    {
        id: '6805705269',
        titulo: 'Cómo instalar flutter más recomendaciones',
        descripcion: '',
        descripcionCorta: '',
        ruta: 'flutter-instalacion',
        componente: 'FlutterInstalacionComponent',
        mostrarEnPostHome: true,
        estilos: {
            color: ''
        },
        fechaCreacion: '2023-04-02',
        fechaActualizacion: '2023-04-02',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/flutter/instalacion-flutter.jpg',
        imgVertical:'',
        imgCuadro:'',
        categoria: DATOS_CATEGORIA
    },
    {
        id: '8076473031',
        titulo: 'Flutter elementos del framework',
        descripcion: 'El gran concepto de Widgets y la comunidad enfocada en generar recursos, dejan un panorama muy llamativo para sumergirnos a programar y aportarle desarrollos al mundo.',
        descripcionCorta: '',
        ruta: 'flutter-elementos',
        componente: 'FlutterElementosComponent',
        mostrarEnPostHome: true,
        estilos: {
            color: ''
        },
        fechaCreacion: '2022-09-02',
        fechaActualizacion: '2022-09-02',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/flutter/elementos-flutter.jpg',
        imgVertical:'',
        imgCuadro:'',
        categoria: DATOS_CATEGORIA
    },
]