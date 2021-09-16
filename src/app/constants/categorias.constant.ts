import { CategoriasModel } from '../models/categorias.model';

export const CATEGORIAS: CategoriasModel [] = [
/*     ANDROID */
    {
        id:1,
        categoria: 'android',
        rutaCategoria: 'componentes/ANDROID/categoria.html',
        rutaIcono: 'assets/img/categorias/android-studio_text_white.png',
        alturaIcono: '80',
        color: 'bg-Android',
        post: [
            {
                nombre: 'ATRIBUTOS CSS',
                posicion: 'pos-z',
                ruta:'componentes/ANDROID/and_001.html',
                activo: false
            },
            {
                nombre: 'ELEMENTOS Y DESCRIPCIÓN',
                posicion: 'rot-2',
                ruta:'componentes/ANDROID/and_002.html',
                activo: false
            },
            {
                nombre: 'GENERAR APK',
                posicion: 'rot-1',
                ruta:'componentes/ANDROID/and_003.html',
                activo: false
            },
            {
                nombre: 'PLAY STORE',
                posicion: 'rot-2',
                ruta:'componentes/ANDROID/and_004.html',
                activo: false
            },
            {
                nombre: 'PRUEBAS UNITARIAS',
                posicion: 'pos-z',
                ruta:'componentes/ANDROID/and_005.html',
                activo: false
            },
        ]
    },
/*     ANGULAR */
    {
        id:2,
        categoria: 'angular',
        rutaCategoria: 'componentes/ANGULAR/categoria.html',
        rutaIcono: 'assets/img/categorias/angular.png',
        alturaIcono: '80',
        color: 'bg-Angular',
        post: [
            {
                nombre: 'INSTALACIÓN',
                posicion: 'pos-z',
                ruta:'angular-instalacion',
                activo: true
            },
            {
                nombre: 'PRUEBAS UNITARIAS',
                posicion: 'rot-2',
                ruta:'componentes/ANGULAR/ang_002.html',
                activo: false
            },
            {
                nombre: 'INPUT Y OUTPUT',
                posicion: 'rot-1',
                ruta:'componentes/ANGULAR/ang_003.html',
                activo: false
            },
            {
                nombre: 'ELEMENTOS DESCRIPCIÓN...',
                posicion: 'rot-2',
                ruta:'componentes/ANGULAR/ang_004.html',
                activo: false
            },
            {
                nombre: 'CRUD CON UN MOCKDATA',
                posicion: 'pos-z',
                ruta:'componentes/ANGULAR/ang_005.html',
                activo: false
            },
            {
                nombre: 'RXJS',
                posicion: 'pos-z',
                ruta:'componentes/ANGULAR/ang_006.html',
                activo: false
            },
            {
                nombre: 'MICROFRONTENDS',
                posicion: 'pos-z',
                ruta:'componentes/ANGULAR/ang_007.html',
                activo: false
            },
            {
                nombre: 'MONTAR EN DOMINIO',
                posicion: 'pos-z',
                ruta:'componentes/ANGULAR/ang_008.html',
                activo: false
            },
            {
                nombre: 'REDUX',
                posicion: 'rot-1',
                ruta:'componentes/ANGULAR/ang_009.html',
                activo: false
            },
            {
                nombre: 'METODO DEL BARRIL',
                posicion: 'rot-2',
                ruta:'componentes/ANGULAR/ang_010.html',
                activo: false
            },
            {
                nombre: 'TIEMPO REAL SOCKET Y REST',
                posicion: 'rot-2',
                ruta:'componentes/ANGULAR/ang_011.html',
                activo: false
            },
            {
                nombre: 'DEBUGGEAR EN CHROME',
                posicion: 'pos-z',
                ruta:'componentes/ANGULAR/ang_012.html',
                activo: false
            },
        ],
        postMas: [
            {
                subCategoria: 'Ionic',
                post: [
                    {
                        nombre: 'INSTALACIÓN',
                        posicion: 'pos-z',
                        ruta: 'componentes/ANGULAR/ang_001.html',
                        activo: false
                    },
                    {
                        nombre: 'ELEMENTOS DESCRIPCIÓN',
                        posicion: 'rot-2',
                        ruta: 'componentes/ANGULAR/ang_002.html',
                        activo: false
                    },
                ]
            },
            {
                subCategoria: 'PrimeNG',
                post: [
                    {
                        nombre: 'INSTALACIÓN',
                        posicion: 'pos-z',
                        ruta: 'componentes/ANGULAR/ang_001.html',
                        activo: false
                    },
                    {
                        nombre: 'ELEMENTOS DESCRIPCIÓN',
                        posicion: 'rot-2',
                        ruta: 'componentes/ANGULAR/ang_002.html',
                        activo: false
                    },
                ]
            },
        ]
    },
/*      CSS    */
    {
        id:3,
        categoria: 'css',
        rutaCategoria: 'componentes/CSS/categoria.html',
        rutaIcono: 'assets/img/categorias/css.png',
        alturaIcono: '80',
        color: 'bg-Css',
        post: [
            {
                nombre: 'ATRIBUTOS CSS',
                posicion: 'pos-z',
                ruta:'atributos-css',
                activo: false
            },
            {
                nombre: 'HOVER SOBRE IMÁGENES',
                posicion: 'rot-2',
                ruta:'hover-sobre-imagenes',
                activo: false
            },
            {
                nombre: 'VARIABLES CSS',
                posicion: 'rot-1',
                ruta:'variables-css',
                activo: false
            },
            {
                nombre: 'MEDIA QUERIES',
                posicion: 'rot-2',
                ruta:'media-queries',
                activo: false
            },
            {
                nombre: 'SLIDER SOLO CON CSS',
                posicion: 'pos-z',
                ruta:'slider-solo-con-css',
                activo: false
            },
            {
                nombre: 'BOTONES REDES',
                posicion: 'pos-z',
                ruta:'botones-redes',
                activo: false
            },
            {
                nombre: 'MENÚ HAMBURGUESA ANIMADO',
                posicion: 'rot-2',
                ruta:'menu-hamburguesa-animado',
                activo: false
            },
        ]
    },
/*      DART    */
    {
        id:4,
        categoria: 'dart',
        rutaCategoria: 'categoria-dart',
        rutaIcono: 'assets/img/categorias/dart_text_white.png',
        alturaIcono: '40',
        color: 'bg-Dart',
        post: [
            {
                nombre: 'INSTALACIÓN',
                posicion: 'pos-z',
                ruta:'instalacion-dart',
                activo: false
            },
            {
                nombre: 'ELEMENTOS Y DESCRIPCIÓN',
                posicion: 'rot-2',
                ruta:'dart-elementos-descripcion',
                activo: false
            },
            {
                nombre: 'CRUD',
                posicion: 'rot-1',
                ruta:'crud-dart',
                activo: false
            },
            {
                nombre: 'TERMINOS AVANZADOS',
                posicion: 'rot-2',
                ruta:'dart-terminos-avanzados',
                activo: false
            },
            {
                nombre: 'CONTEXTO DART',
                posicion: 'pos-z',
                ruta:'contexto-dart',
                activo: false
            },
            {
                nombre: 'PRUEBAS UNITARIAS',
                posicion: 'pos-z',
                ruta:'dart-pruebas-unitarias',
                activo: false
            },
        ]
    },
/*      DEVELOPER    */
    {
        id:5,
        categoria: 'developer',
        rutaCategoria: 'categoria-developer',
        rutaIcono: 'assets/img/categorias/developer.png',
        alturaIcono: '80',
        color: 'bg-Developer',
        post: [
            {
                nombre: 'INSTALACIÓN',
                posicion: 'pos-z',
                ruta:'instalacion-dart',
                activo: false
            },
            {
                nombre: 'ELEMENTOS Y DESCRIPCIÓN',
                posicion: 'rot-2',
                ruta:'dart-elementos-descripcion',
                activo: false
            },
            {
                nombre: 'CRUD',
                posicion: 'rot-1',
                ruta:'crud-dart',
                activo: false
            },
            {
                nombre: 'TERMINOS AVANZADOS',
                posicion: 'rot-2',
                ruta:'dart-terminos-avanzados',
                activo: false
            },
            {
                nombre: 'CONTEXTO DART',
                posicion: 'pos-z',
                ruta:'contexto-dart',
                activo: false
            },
            {
                nombre: 'PRUEBAS UNITARIAS',
                posicion: 'pos-z',
                ruta:'dart-pruebas-unitarias',
                activo: false
            },
        ]
    },
/*      FLUTTER    */
    {
        id:6,
        categoria: 'flutter',
        rutaCategoria: 'categoria-flutter',
        rutaIcono: 'assets/img/categorias/flutter_text_white.png',
        alturaIcono: '80',
        color: 'bg-Flutter',
        post: [
            {
                nombre: 'INSTALACIÓN',
                posicion: 'pos-z',
                ruta:'instalacion-dart',
                activo: false
            },
            {
                nombre: 'ELEMENTOS Y DESCRIPCIÓN',
                posicion: 'rot-2',
                ruta:'dart-elementos-descripcion',
                activo: false
            },
            {
                nombre: 'CRUD',
                posicion: 'rot-1',
                ruta:'crud-dart',
                activo: false
            },
            {
                nombre: 'TERMINOS AVANZADOS',
                posicion: 'rot-2',
                ruta:'dart-terminos-avanzados',
                activo: false
            },
            {
                nombre: 'CONTEXTO DART',
                posicion: 'pos-z',
                ruta:'contexto-dart',
                activo: false
            },
            {
                nombre: 'PRUEBAS UNITARIAS',
                posicion: 'pos-z',
                ruta:'dart-pruebas-unitarias',
                activo: false
            },
        ]
    },
/*      GIT    */
    {
        id:7,
        categoria: 'git',
        rutaCategoria: 'categoria-git',
        rutaIcono: 'assets/img/categorias/git-light.png',
        alturaIcono: '80',
        color: 'bg-Git',
        post: [
            {
                nombre: 'INSTALACIÓN',
                posicion: 'pos-z',
                ruta:'instalacion-dart',
                activo: false
            },
            {
                nombre: 'ELEMENTOS Y DESCRIPCIÓN',
                posicion: 'rot-2',
                ruta:'dart-elementos-descripcion',
                activo: false
            },
            {
                nombre: 'CRUD',
                posicion: 'rot-1',
                ruta:'crud-dart',
                activo: false
            },
            {
                nombre: 'TERMINOS AVANZADOS',
                posicion: 'rot-2',
                ruta:'dart-terminos-avanzados',
                activo: false
            },
            {
                nombre: 'CONTEXTO DART',
                posicion: 'pos-z',
                ruta:'contexto-dart',
                activo: false
            },
            {
                nombre: 'PRUEBAS UNITARIAS',
                posicion: 'pos-z',
                ruta:'dart-pruebas-unitarias',
                activo: false
            },
        ]
    },
/*      HTML    */
    {
        id:8,
        categoria: 'html',
        rutaCategoria: 'categoria-html',
        rutaIcono: 'assets/img/categorias/html-white.png',
        alturaIcono: '80',
        color: 'bg-Html',
        post: [
            {
                nombre: 'INSTALACIÓN',
                posicion: 'pos-z',
                ruta:'instalacion-dart',
                activo: false
            },
            {
                nombre: 'ELEMENTOS Y DESCRIPCIÓN',
                posicion: 'rot-2',
                ruta:'dart-elementos-descripcion',
                activo: false
            },
            {
                nombre: 'CRUD',
                posicion: 'rot-1',
                ruta:'crud-dart',
                activo: false
            },
            {
                nombre: 'TERMINOS AVANZADOS',
                posicion: 'rot-2',
                ruta:'dart-terminos-avanzados',
                activo: false
            },
            {
                nombre: 'CONTEXTO DART',
                posicion: 'pos-z',
                ruta:'contexto-dart',
                activo: false
            },
            {
                nombre: 'PRUEBAS UNITARIAS',
                posicion: 'pos-z',
                ruta:'dart-pruebas-unitarias',
                activo: false
            },
        ]
    },
/*      JAVA    */
    {
        id:9,
        categoria: 'java',
        rutaCategoria: 'categoria-java',
        rutaIcono: 'assets/img/categorias/logo-java.png',
        alturaIcono: '80',
        color: 'bg-Java',
        post: [
            {
                nombre: 'INSTALACIÓN',
                posicion: 'pos-z',
                ruta:'instalacion-dart',
                activo: false
            },
            {
                nombre: 'ELEMENTOS Y DESCRIPCIÓN',
                posicion: 'rot-2',
                ruta:'dart-elementos-descripcion',
                activo: false
            },
            {
                nombre: 'CRUD',
                posicion: 'rot-1',
                ruta:'crud-dart',
                activo: false
            },
            {
                nombre: 'TERMINOS AVANZADOS',
                posicion: 'rot-2',
                ruta:'dart-terminos-avanzados',
                activo: false
            },
            {
                nombre: 'CONTEXTO DART',
                posicion: 'pos-z',
                ruta:'contexto-dart',
                activo: false
            },
            {
                nombre: 'PRUEBAS UNITARIAS',
                posicion: 'pos-z',
                ruta:'dart-pruebas-unitarias',
                activo: false
            },
        ]
    },
/*      JAVASCRIPT    */
    {
        id:10,
        categoria: 'javascript',
        rutaCategoria: 'categoria-javascript',
        rutaIcono: 'assets/img/categorias/javascript.png',
        alturaIcono: '80',
        color: 'bg-Javascript',
        post: [
            {
                nombre: 'INSTALACIÓN',
                posicion: 'pos-z',
                ruta:'instalacion-dart',
                activo: false
            },
            {
                nombre: 'ELEMENTOS Y DESCRIPCIÓN',
                posicion: 'rot-2',
                ruta:'dart-elementos-descripcion',
                activo: false
            },
            {
                nombre: 'CRUD',
                posicion: 'rot-1',
                ruta:'crud-dart',
                activo: false
            },
            {
                nombre: 'TERMINOS AVANZADOS',
                posicion: 'rot-2',
                ruta:'dart-terminos-avanzados',
                activo: false
            },
            {
                nombre: 'CONTEXTO DART',
                posicion: 'pos-z',
                ruta:'contexto-dart',
                activo: false
            },
            {
                nombre: 'REVISIÓN A VERSIONES NODE JS',
                posicion: 'pos-z',
                ruta:'revision-versiones-node-js',
                activo: false
            },
        ]
    },
/*      LINUX    */
    {
        id:11,
        categoria: 'linux',
        rutaCategoria: 'categoria-linux',
        rutaIcono: 'assets/img/categorias/linux-white.png',
        alturaIcono: '80',
        color: 'bg-Linux',
        post: [
            {
                nombre: 'INSTALACIÓN',
                posicion: 'pos-z',
                ruta:'instalacion-dart',
                activo: false
            },
            {
                nombre: 'ELEMENTOS Y DESCRIPCIÓN',
                posicion: 'rot-2',
                ruta:'dart-elementos-descripcion',
                activo: false
            },
            {
                nombre: 'CRUD',
                posicion: 'rot-1',
                ruta:'crud-dart',
                activo: false
            },
            {
                nombre: 'TERMINOS AVANZADOS',
                posicion: 'rot-2',
                ruta:'dart-terminos-avanzados',
                activo: false
            },
            {
                nombre: 'CONTEXTO DART',
                posicion: 'pos-z',
                ruta:'contexto-dart',
                activo: false
            },
            {
                nombre: 'PRUEBAS UNITARIAS',
                posicion: 'pos-z',
                ruta:'dart-pruebas-unitarias',
                activo: false
            },
        ]
    },
/*      SQL    */
    {
        id:12,
        categoria: 'sql',
        rutaCategoria: 'categoria-sql',
        rutaIcono: 'assets/img/categorias/sql.png',
        alturaIcono: '80',
        color: 'bg-Sql',
        post: [
            {
                nombre: 'INSTALACIÓN',
                posicion: 'pos-z',
                ruta:'instalacion-dart',
                activo: false
            },
            {
                nombre: 'ELEMENTOS Y DESCRIPCIÓN',
                posicion: 'rot-2',
                ruta:'dart-elementos-descripcion',
                activo: false
            },
            {
                nombre: 'CRUD',
                posicion: 'rot-1',
                ruta:'crud-dart',
                activo: false
            },
            {
                nombre: 'TERMINOS AVANZADOS',
                posicion: 'rot-2',
                ruta:'dart-terminos-avanzados',
                activo: false
            },
            {
                nombre: 'CONTEXTO DART',
                posicion: 'pos-z',
                ruta:'contexto-dart',
                activo: false
            },
            {
                nombre: 'PRUEBAS UNITARIAS',
                posicion: 'pos-z',
                ruta:'dart-pruebas-unitarias',
                activo: false
            },
        ]
    },
/*      PHP    */
    {
        id:13,
        categoria: 'php',
        rutaCategoria: 'categoria-php',
        rutaIcono: 'assets/img/categorias/php.png',
        alturaIcono: '80',
        color: 'bg-Php',
        post: [
            {
                nombre: 'INSTALACIÓN',
                posicion: 'pos-z',
                ruta:'instalacion-dart',
                activo: false
            },
            {
                nombre: 'ELEMENTOS Y DESCRIPCIÓN',
                posicion: 'rot-2',
                ruta:'dart-elementos-descripcion',
                activo: false
            },
            {
                nombre: 'CRUD',
                posicion: 'rot-1',
                ruta:'crud-dart',
                activo: false
            },
            {
                nombre: 'TERMINOS AVANZADOS',
                posicion: 'rot-2',
                ruta:'dart-terminos-avanzados',
                activo: false
            },
            {
                nombre: 'CONTEXTO DART',
                posicion: 'pos-z',
                ruta:'contexto-dart',
                activo: false
            },
            {
                nombre: 'PRUEBAS UNITARIAS',
                posicion: 'pos-z',
                ruta:'dart-pruebas-unitarias',
                activo: false
            },
        ]
    },
/*      WORDPRESS    */
    {
        id:14,
        categoria: 'wordpress',
        rutaCategoria: 'categoria-wordpress',
        rutaIcono: 'assets/img/categorias/wordpress2.png',
        alturaIcono: '80',
        color: 'bg-Wordpress',
        post: [
            {
                nombre: 'INSTALACIÓN',
                posicion: 'pos-z',
                ruta:'instalacion-dart',
                activo: false
            },
            {
                nombre: 'ELEMENTOS Y DESCRIPCIÓN',
                posicion: 'rot-2',
                ruta:'dart-elementos-descripcion',
                activo: false
            },
            {
                nombre: 'CRUD',
                posicion: 'rot-1',
                ruta:'crud-dart',
                activo: false
            },
            {
                nombre: 'TERMINOS AVANZADOS',
                posicion: 'rot-2',
                ruta:'dart-terminos-avanzados',
                activo: false
            },
            {
                nombre: 'CONTEXTO DART',
                posicion: 'pos-z',
                ruta:'contexto-dart',
                activo: false
            },
            {
                nombre: 'PRUEBAS UNITARIAS',
                posicion: 'pos-z',
                ruta:'dart-pruebas-unitarias',
                activo: false
            },
        ]
    },
]