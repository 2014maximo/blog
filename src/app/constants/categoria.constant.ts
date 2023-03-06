import { ANGULAR } from './posts-angular.constant';
import { ANDROID } from './posts-android.constant';
import { CSS } from './posts-css.constant';
import { DART } from './posts-dart.constant';
import { DEVELOPER } from './posts-developer.constant';
import { ELECTRON } from './posts-electron.contant';
import { FLUTTER } from './posts-flutter.contant';
import { GIT } from './posts-git.constant';
import { HTML } from './posts-html.constant';
import { JAVASCRIPT } from './posts-javascript.constant';
import { DB } from './posts-db.constant';
import { CategoriaPostModel } from '../models/categorias.model';

export const CATEGORIA: CategoriaPostModel[] = [
    {
        id:1,
        categoria: 'android',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/android.png',
        alturaIcono: '80',
        estado:'activo',
        rutaCategoria: 'android',
        colorFondo: 'bg-Android',
        color: 'c-Android',
        descripcion: '',
        descripcionCorta: '',
        posts: ANDROID,
        subcategorias: []
    },
    {
        id:2,
        categoria: 'angular',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/angular.png',
        alturaIcono: '80',
        estado:'activo',
        rutaCategoria: 'angular',
        colorFondo: 'bg-Angular',
        color: 'c-Angular',
        descripcion: '',
        descripcionCorta: '',
        posts: ANGULAR,
        subcategorias: []
    },
    {
        id:3,
        categoria: 'css',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/css.png',
        alturaIcono: '80',
        estado:'activo',
        rutaCategoria: 'css',
        colorFondo: 'bg-Css',
        color: 'c-Css',
        descripcion: '',
        descripcionCorta: '',
        posts: CSS,
        subcategorias: []
    },
    {
        id:4,
        categoria: 'dart',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/dart_text_white.png',
        alturaIcono: '40',
        estado:'activo',
        rutaCategoria: 'dart',
        colorFondo: 'bg-Dart',
        color: 'c-Dart',
        descripcion: '',
        descripcionCorta: '',
        posts: DART,
        subcategorias: []
    },
    {
        id:5,
        categoria: 'db',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/sql.png',
        alturaIcono: '55',
        estado:'activo',
        rutaCategoria: 'db',
        colorFondo: 'bg-Sql',
        color: 'c-Sql',
        descripcion: '',
        descripcionCorta: '',
        posts: DB,
        subcategorias: []
    },
    {
        id:6,
        categoria: 'developer',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/developer.png',
        alturaIcono: '90',
        estado:'activo',
        rutaCategoria: 'developer',
        colorFondo: 'bg-Developer',
        color: 'c-Developer',
        descripcion: '',
        descripcionCorta: '',
        posts: DEVELOPER,
        subcategorias: []
    },
    {
        id:7,
        categoria: 'electron',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/electron.png',
        alturaIcono: '90',
        estado:'activo',
        rutaCategoria: 'electron',
        colorFondo: 'bg-Electron',
        color: 'c-Electron',
        descripcion: '',
        descripcionCorta: '',
        posts: ELECTRON,
        subcategorias: []
    },
    {
        id:8,
        categoria: 'flutter',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/flutter_text_white.png',
        alturaIcono: '80',
        estado:'activo',
        rutaCategoria: 'flutter',
        colorFondo: 'bg-Flutter',
        color: 'c-Flutter',
        descripcion: '',
        descripcionCorta: '',
        posts: FLUTTER,
        subcategorias: []
    },
    {
        id:9,
        categoria: 'git',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/git-light.png',
        alturaIcono: '60',
        estado:'activo',
        rutaCategoria: 'git',
        colorFondo: 'bg-Git',
        color: 'c-Git',
        descripcion: '',
        descripcionCorta: '',
        posts: GIT,
        subcategorias: []
    },
    {
        id:10,
        categoria: 'html',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/html-white.png',
        alturaIcono: '80',
        estado:'activo',
        rutaCategoria: 'html',
        colorFondo: 'bg-Html',
        color: 'c-Html',
        descripcion: '',
        descripcionCorta: '',
        posts: HTML,
        subcategorias: []
    },
    {
        id:11,
        categoria: 'java',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/logo-java.png',
        alturaIcono: '100',
        estado:'activo',
        rutaCategoria: 'java',
        colorFondo: 'bg-Java',
        color: 'c-Java',
        descripcion: '',
        descripcionCorta: '',
        posts: JAVASCRIPT,
        subcategorias: []
    },
    {
        id:12,
        categoria: 'javascript',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/javascript.png',
        alturaIcono: '80',
        estado:'activo',
        rutaCategoria: 'javascript',
        colorFondo: 'bg-Javascript',
        color: 'c-Javascript',
        descripcion: '',
        descripcionCorta: '',
        posts: JAVASCRIPT,
        subcategorias: []
    },
    {
        id:13,
        categoria: 'kotlin',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/kotlin.png',
        alturaIcono: '60',
        estado:'inactivo',
        rutaCategoria: 'kotlin',
        colorFondo: 'bg-Kotlin',
        color: 'c-Kotlin',
        descripcion: '',
        descripcionCorta: '',
        posts: JAVASCRIPT,
        subcategorias: []
    },
    {
        id:14,
        categoria: 'kubernetes',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/kubernetes.png',
        alturaIcono: '100',
        estado:'inactivo',
        rutaCategoria: 'kubernetes',
        colorFondo: 'bg-Kubernetes',
        color: 'c-Kubernetes',
        descripcion: '',
        descripcionCorta: '',
        posts: JAVASCRIPT,
        subcategorias: []
    },
    {
        id:13,
        categoria: 'linux',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/linux-white.png',
        alturaIcono: '60',
        estado:'inactivo',
        rutaCategoria: 'linux',
        colorFondo: 'bg-Linux',
        color: 'c-Linux',
        descripcion: '',
        descripcionCorta: '',
        posts: JAVASCRIPT,
        subcategorias: []
    },
    {
        id:14,
        categoria: 'net',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/net-framework.png',
        alturaIcono: '80',
        estado:'inactivo',
        rutaCategoria: 'net',
        colorFondo: 'bg-NetFramework',
        color: 'c-NetFramework',
        descripcion: '',
        descripcionCorta: '',
        posts: JAVASCRIPT,
        subcategorias: []
    },
    {
        id:15,
        categoria: 'php',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/php.png',
        alturaIcono: '70',
        estado:'inactivo',
        rutaCategoria: 'php',
        colorFondo: 'bg-Php',
        color: 'c-Php',
        descripcion: '',
        descripcionCorta: '',
        posts: JAVASCRIPT,
        subcategorias: []
    },
    {
        id:16,
        categoria: 'react',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/react.png',
        alturaIcono: '100',
        estado:'inactivo',
        rutaCategoria: 'react',
        colorFondo: 'bg-React',
        color: ' c-React',
        descripcion: '',
        descripcionCorta: '',
        posts: JAVASCRIPT,
        subcategorias: []
    },
    {
        id:17,
        categoria: 'wordpress',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/wordpress2.png',
        alturaIcono: '80',
        estado:'inactivo',
        rutaCategoria: 'wordpress',
        colorFondo: 'bg-Wordpress',
        color: 'c-Wordpress',
        descripcion: '',
        descripcionCorta: '',
        posts: JAVASCRIPT,
        subcategorias: []
    },
]