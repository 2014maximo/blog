import { CategoriasModel } from '../models/categorias.model';


export const CATEGORIAS: CategoriasModel [] = [
/*     ANDROID */
    {
        id:1,
        categoria: 'android',
        rutaCategoria: 'android-studio',
        rutaIcono: 'assets/img/categorias/android-studio_text_white.png',
        alturaIcono: '80',
        color: 'bg-Android',
        post: [
            {
                nombre: 'INSTALACION',
                posicion: 'pos-z',
                ruta:'android-instalacion',
                activo: false
            },
            {
                nombre: 'ELEMENTOS Y DESCRIPCIÓN',
                posicion: 'rot-2',
                ruta:'android-elementos',
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
        rutaCategoria: 'angular',
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
                nombre: 'DESCRIPCIÓN ELEMENTOS',
                posicion: 'rot-2',
                ruta:'angular-descripcion-elementos',
                activo: true
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
                subCategoria: 'PrimeNG 7.2.6 lts',
                post: [
                    {
                        nombre: 'INSTALACIÓN',
                        posicion: 'pos-z',
                        ruta: 'componentes/ANGULAR/ang_001.html',
                        activo: false
                    },
                    {
                        nombre: 'DESCRIPCIÓN ELEMENTOS',
                        posicion: 'rot-2',
                        ruta: 'p-ng-descripcion-elementos',
                        activo: true
                    },
                ]
            },
        ]
    },
/*      CSS    */
    {
        id:3,
        categoria: 'css',
        rutaCategoria: 'css',
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
        rutaCategoria: 'dart',
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
        rutaCategoria: 'developer',
        rutaIcono: 'assets/img/categorias/developer.png',
        alturaIcono: '80',
        color: 'bg-Developer',
        post: [
            {
                nombre: 'SUPER RECURSOS DE INTERNET',
                posicion: 'pos-z',
                ruta:'super-recursos-internet',
                activo: true
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
/*      ELECTRON    */
    {
        id:6,
        categoria: 'electron',
        rutaCategoria: 'electron',
        rutaIcono: 'assets/img/categorias/electron.png',
        alturaIcono: '80',
        color: 'bg-Electron',
        post: [
            {
                nombre: 'INSTALACIÓN',
                posicion: 'pos-z',
                ruta:'flutter-instalacion',
                activo: true,
                color: 't2'
            },
            {
                nombre: 'ELEMENTOS Y DESCRIPCIÓN',
                posicion: 'rot-2',
                ruta:'dart-elementos-descripcion',
                activo: false,
                color: 't2'
            },
            {
                nombre: 'CRUD',
                posicion: 'rot-1',
                ruta:'crud-dart',
                activo: false,
                color: 't2'
            },
            {
                nombre: 'TERMINOS AVANZADOS',
                posicion: 'rot-2',
                ruta:'dart-terminos-avanzados',
                activo: false,
                color: 't2'
            },
            {
                nombre: 'CONTEXTO DART',
                posicion: 'pos-z',
                ruta:'contexto-dart',
                activo: false,
                color: 't2'
            },
            {
                nombre: 'PRUEBAS UNITARIAS',
                posicion: 'pos-z',
                ruta:'dart-pruebas-unitarias',
                activo: false,
                color: 't2'
            },
        ]
    },
/*      FLUTTER    */
    {
        id:7,
        categoria: 'flutter',
        rutaCategoria: 'flutter',
        rutaIcono: 'assets/img/categorias/flutter_text_white.png',
        alturaIcono: '80',
        color: 'bg-Flutter',
        post: [
            {
                nombre: 'INSTALACIÓN',
                posicion: 'pos-z',
                ruta:'flutter-instalacion',
                activo: true
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
        id:8,
        categoria: 'git',
        rutaCategoria: 'git',
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
        id:9,
        categoria: 'html',
        rutaCategoria: 'html',
        rutaIcono: 'assets/img/categorias/html-white.png',
        alturaIcono: '80',
        color: 'bg-Html',
        post: [
            {
                nombre: 'DESCRIPCIÓN ETIQUETAS',
                posicion: 'pos-z',
                ruta:'html-etiquetas',
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
        id:10,
        categoria: 'java',
        rutaCategoria: 'java',
        rutaIcono: 'assets/img/categorias/logo-java.png',
        alturaIcono: '80',
        color: 'bg-Java',
        post: [
            {
                nombre: 'INSTALACIÓN',
                posicion: 'pos-z',
                ruta:'java-instalacion',
                activo: false
            },
            {
                nombre: 'ELEMENTOS Y DESCRIPCIÓN',
                posicion: 'rot-2',
                ruta:'java-elementos',
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
        id:11,
        categoria: 'javascript',
        rutaCategoria: 'javascript',
        rutaIcono: 'assets/img/categorias/javascript.png',
        alturaIcono: '80',
        color: 'bg-Javascript',
        post: [
            {
                nombre: 'PROPIEDADES',
                posicion: 'rot-2',
                ruta:'javascript-propiedades',
                activo: false,
                color: 't2 textoHoverBlanco'
            },
            {
                nombre: 'RECORRER ARRAYS OBJETOS',
                posicion: 'pos-z',
                ruta:'recorrer-arrays-objetos',
                activo: true,
                color: 't2 textoHoverBlanco'
            },
            {
                nombre: 'CRUD',
                posicion: 'rot-1',
                ruta:'crud-dart',
                activo: false,
                color: 't2 textoHoverBlanco'
            },
            {
                nombre: 'TERMINOS AVANZADOS',
                posicion: 'rot-2',
                ruta:'dart-terminos-avanzados',
                activo: false,
                color: 't2 textoHoverBlanco'
            },
            {
                nombre: 'CONTEXTO DART',
                posicion: 'pos-z',
                ruta:'contexto-dart',
                activo: false,
                color: 't2 textoHoverBlanco'
            },
            {
                nombre: 'REVISIÓN A VERSIONES NODE JS',
                posicion: 'pos-z',
                ruta:'revision-versiones-node-js',
                activo: false,
                color: 't2 textoHoverBlanco'
            },
        ]
    },
/*      KOTLIN    */
    {
        id:12,
        categoria: 'kotlin',
        rutaCategoria: 'kotlin',
        rutaIcono: 'assets/img/categorias/kotlin-white.png',
        alturaIcono: '80',
        color: 'bg-Kotlin',
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
/*      LINUX    */
    {
        id:13,
        categoria: 'linux',
        rutaCategoria: 'linux',
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
        id:14,
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
        id:15,
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
        id:16,
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
/*      NET-FRAMEWORK    */
    {
        id:17,
        categoria: 'net-framework',
        rutaCategoria: 'categoria-net-framework',
        rutaIcono: 'assets/img/categorias/net-framework.png',
        alturaIcono: '80',
        color: 'bg-NetFramework',
        post: [
            {
                nombre: 'INSTALACIÓN',
                posicion: 'pos-z',
                ruta:'net-instalacion',
                activo: true
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
/*      SENA    */
    {
        id:18,
        categoria: 'sena',
        rutaCategoria: 'categoria-sena',
        rutaIcono: 'assets/img/categorias/sena.png',
        alturaIcono: '80',
        color: 'bg-Sena',
        post: [
            {
                nombre: 'FICHA 2276732',
                posicion: 'pos-z',
                ruta:'ficha-actual',
                activo: true
            },
            {
                nombre: 'RECURSOS INFORMATIVOS',
                posicion: 'rot-2',
                ruta:'recursos-informativos',
                activo: false
            }
        ]
    },
]