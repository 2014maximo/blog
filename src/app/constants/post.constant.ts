import { PostsModel } from '../models/post.model';
import { LISTA_CATEGORIAS } from './categorias.constant';
import { rutaImgBanner } from './globales.constant';

export const POSTS: PostsModel[] = [
    // ANDROID
    {
        id_post: 'andr-0001',
        nombre: 'INSTALACIÓN DE ANDROID STUDIO',
        categoria: LISTA_CATEGORIAS.ANDROID,
        ruta: 'ng-instalacion',
        rutaImagen: `${rutaImgBanner}Instalaciona-angular.jpg`,
        fechaCreacion: new Date(2020,7,30),
        fechaActualizacion: new Date(2021,9,30),
        incluirFondo: false,
        sombra: ''
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
        sombra: ''
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
        sombra: ''
    },
] 