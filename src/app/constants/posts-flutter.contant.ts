import { DatosPost, EstilosPost } from '../models/categorias.model';

export const ESTILO_FLUTTER: EstilosPost = {
    color: 'c-Flutter',
    colorFondo: 'bg-Flutter'
}

export const FLUTTER: DatosPost[] = [
    {
        id: '9249441409',
        nombre: 'Flutter',
        descripcion: '',
        descripcionCorta: '',
        ruta: 'flutter',
        componente: 'FlutterComponent',
        mostrarEnPostHome: false,
        estilos: ESTILO_FLUTTER,
        fechaCreacion: '2022-04-08',
        fechaActualizacion: '2022-04-08',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:'',
        categoria: 'flutter',
        posicion: 'rot-1',
        estado: 'inactivo'
    },
    {
        id: '6805705269',
        nombre: 'Cómo instalar flutter más recomendaciones',
        descripcion: '',
        descripcionCorta: '',
        ruta: 'flutter-instalacion',
        componente: 'FlutterInstalacionComponent',
        mostrarEnPostHome: true,
        estilos: ESTILO_FLUTTER,
        fechaCreacion: '2023-04-02',
        fechaActualizacion: '2023-04-02',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/flutter/instalacion-flutter.jpg',
        imgVertical:'',
        imgCuadro:'',
        categoria: 'flutter',
        posicion: 'rot-2',
        estado: 'activo'
    },
    {
        id: '8076473031',
        nombre: 'Flutter elementos del framework',
        descripcion: 'El gran concepto de Widgets y la comunidad enfocada en generar recursos, dejan un panorama muy llamativo para sumergirnos a programar y aportarle desarrollos al mundo.',
        descripcionCorta: '',
        ruta: 'flutter-elementos',
        componente: 'FlutterElementosComponent',
        mostrarEnPostHome: true,
        estilos: ESTILO_FLUTTER,
        fechaCreacion: '2022-09-02',
        fechaActualizacion: '2022-09-02',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/flutter/elementos-flutter.jpg',
        imgVertical:'',
        imgCuadro:'',
        categoria: 'flutter',
        posicion: 'rot-z',
        estado: 'activo'
    },
]