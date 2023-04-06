import { PostModel } from '../shared/models/post.model';
import { LISTA_CATEGORIAS } from './categorias.constant';
import { rutaCatego, rutaImgBanner } from './generales/globales.constant';

export const POSTS: PostModel[] = [
    // ANDROID
    {
        rutaImagen: 'assets/img/categorias/android-studio_text_white.png',
        alturaImagen: '100',
        incluirFondo: true,
        nombre: 'INSTALACIÓN',
        sombra: 'drop',
        categoria: 'android',
        fechaActualizacion: new Date(2033,3,22),
        fechaCreacion: new Date(2022,2,22),
        id_post: 'andr-0001',
        ruta: 'andr-android-studio',
        colorText: 'tc-green-one',
        mostrarBreadcrumb: true
    },
    // ANGULAR
    {
        id_post: 'ng-0002',
        nombre: 'INSTALACIÓN DE ANGULAR Y RECOMENDACIONES',
        categoria: LISTA_CATEGORIAS.ANGULAR,
        ruta: 'ng-instalacion',
        rutaImagen: `${rutaImgBanner}Instalaciona-angular.jpg`,
        fechaCreacion: new Date(2020,7,30),
        fechaActualizacion: new Date(2021,9,30),
        incluirFondo: false,
        sombra: '',
        alturaImagen: '',
        colorText: '',
        mostrarBreadcrumb: false
    },
    {
        id_post: 'ng-0001',
        nombre: 'ANGULAR DESCRIPCIÓN ELEMENTOS',
        categoria:  LISTA_CATEGORIAS.ANGULAR,
        ruta: 'ng-descripcion-elementos',
        rutaImagen: `${rutaImgBanner}Instalaciona-angular.jpg`,
        fechaCreacion: new Date(2020,7,30),
        fechaActualizacion: new Date(2021,9,30),
        incluirFondo: false,
        sombra: '',
        alturaImagen: '',
        colorText: '',
        mostrarBreadcrumb: false
    },
    // CSS
    {
        id_post: 'css-0001',
        rutaImagen: `${rutaCatego}dart_text_white.png`,
        alturaImagen: '60',
        incluirFondo: true,
        nombre: '',
        sombra: 'drop',
        categoria: 'css',
        fechaActualizacion: new Date(2022,10,23),
        fechaCreacion: new Date(2022,10,23),
        ruta: 'css-bootstrap4-clases',
        colorText: 'tc-blue-six',
        mostrarBreadcrumb: false
    },
    // DART
    {
        rutaImagen: `${rutaCatego}dart_text_white.png`,
        alturaImagen: '60',
        incluirFondo: true,
        nombre: '',
        sombra: 'drop',
        categoria: 'dart',
        fechaActualizacion: new Date(2022,4,23),
        fechaCreacion: new Date(2022,4,23),
        id_post: 'dart',
        ruta: 'dart',
        colorText: 'tc-blue-six',
        mostrarBreadcrumb: false
    },
    {
        rutaImagen: `${rutaCatego}DART/dartelement.png`,
        alturaImagen: '200',
        incluirFondo: true,
        nombre: 'ELEMENTOS Y DESCRIPCION',
        sombra: 'drop',
        categoria: 'dart',
        fechaActualizacion: new Date(2022,4,23),
        fechaCreacion: new Date(2022,4,23),
        id_post: 'dart-0002',
        ruta: 'dart-elementos',
        colorText: 'tc-blue-six',
        mostrarBreadcrumb: true
    },
    // FLUTTER
    {
        rutaImagen: `${rutaCatego}flutter_text_white.png`,
        alturaImagen: '60',
        incluirFondo: true,
        nombre: '',
        sombra: 'drop',
        categoria: 'flutter',
        fechaActualizacion: new Date(2022,4,23),
        fechaCreacion: new Date(2022,4,23),
        id_post: 'flutter',
        ruta: 'flutter',
        colorText: 'tc-blue-six',
        mostrarBreadcrumb: false
    },
    {
        rutaImagen: `${rutaCatego}flutter_text_white.png`,
        alturaImagen: '200',
        incluirFondo: true,
        nombre: 'INSTALACIÓN',
        sombra: 'drop',
        categoria: 'flutter',
        fechaActualizacion: new Date(2022,4,23),
        fechaCreacion: new Date(2022,4,23),
        id_post: 'flutter-0001',
        ruta: 'flutter-instalacion',
        colorText: 'tc-blue-six',
        mostrarBreadcrumb: true
    },
    {
        rutaImagen: `${rutaCatego}flutter_text_white.png`,
        alturaImagen: '200',
        incluirFondo: true,
        nombre: 'Elementos FLUTTER Y DESCRIPCIÓN',
        sombra: 'drop',
        categoria: 'flutter',
        fechaActualizacion: new Date(2022,4,23),
        fechaCreacion: new Date(2022,4,23),
        id_post: 'flutter-elementos',
        ruta: 'flutter-instalacion',
        colorText: 'tc-blue-six',
        mostrarBreadcrumb: true
    },
] 