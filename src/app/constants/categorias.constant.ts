import { CategoriasModel } from '../shared/models/categorias.model';

export const LISTA_CATEGORIAS = {
    ANDROID: 'android',
    ANGULAR: 'angular',
    CSS: 'css',
    DART: 'dart',
    DB: 'db',
    DEVELOPER: 'developer',
    ELECTRON: 'electron',
    ESTADISTICA: 'estadistica',
    FLUTTER: 'flutter',
    GIT: 'git',
    HTML: 'html',
    JAVA: 'java',
    JAVASCRIPT: 'javascript',
    KOTLIN: 'kotlin',
    KUBERNETES: 'kubernetes',
    LINUX: 'linux',
    NET: 'net',
    PHP: 'php',
    REACT: 'react',
    SENA: 'sena',
    WORDPRESS: 'wordpress'
}

export const CATEGORIAS: CategoriasModel [] = [
/*     ANDROID */
    {
        id:1,
        categoria: 'android',
        rutaCategoria: 'android',
        rutaIcono: 'assets/img/categorias/android.png',
        alturaIcono: '80',
        color: 'bg-Android',
        post: [
            {
                nombre: 'A. ST. INSTALACIÓN',
                posicion: 'rot-2',
                ruta:'android-elementos',
                activo: true
            },
            {
                nombre: 'GENERAR APK',
                posicion: 'rot-1',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'PLAY STORE',
                posicion: 'rot-2',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'PRUEBAS UNITARIAS',
                posicion: 'pos-z',
                ruta:'home',
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
                ruta:'ng-instalacion',
                activo: true
            },
            {
                nombre: 'DESCRIPCIÓN ELEMENTOS',
                posicion: 'rot-2',
                ruta:'ng-descripcion-elementos',
                activo: true
            },
            {
                nombre: 'COMUNICACION ENTRE COMPONENTES',
                posicion: 'rot-1',
                ruta:'ng-comunicacion-componentes',
                activo: true
            },
            {
                nombre: 'CRUD CON UN MOCKDATA',
                posicion: 'pos-z',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'RXJS',
                posicion: 'pos-z',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'MICROFRONTENDS',
                posicion: 'pos-z',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'MONTAR EN DOMINIO',
                posicion: 'pos-z',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'REDUX',
                posicion: 'rot-1',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'METODO DEL BARRIL',
                posicion: 'rot-2',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'TIEMPO REAL SOCKET Y REST',
                posicion: 'rot-2',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'DEBUGGEAR EN CHROME',
                posicion: 'pos-z',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'PRUEBAS UNITARIAS',
                posicion: 'rot-2',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'CABECERAS CORS',
                posicion: 'rot-2',
                ruta:'ng-cors',
                activo: true
            },
        ],
        postMas: [
            {
                subCategoria: 'Ionic',
                post: [
                    {
                        nombre: 'INSTALACIÓN',
                        posicion: 'pos-z',
                        ruta: 'ionic-instalacion',
                        activo: false
                    },
                    {
                        nombre: 'ELEMENTOS DESCRIPCIÓN',
                        posicion: 'rot-2',
                        ruta: 'ionic-elementos-descripción',
                        activo: false
                    },
                ]
            },
            {
                subCategoria: 'PrimeNG',
                post: [
                    {
                        nombre: 'DESCRIPCIÓN ELEMENTOS',
                        posicion: 'rot-2',
                        ruta: 'prime7-descripcion-elementos',
                        activo: true
                    },
                    {
                        nombre: 'TABLE CHECKBOX',
                        posicion: 'rot-2',
                        ruta: 'prime7-tablecheckbox',
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
                ruta:'home',
                activo: false
            },
            {
                nombre: 'HOVER SOBRE IMÁGENES',
                posicion: 'rot-2',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'VARIABLES CSS',
                posicion: 'rot-1',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'MEDIA QUERIES',
                posicion: 'rot-2',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'SLIDER SOLO CON CSS',
                posicion: 'pos-z',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'BOTONES REDES',
                posicion: 'pos-z',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'MENÚ HAMBURGUESA ANIMADO',
                posicion: 'rot-2',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'BOOTSTRAP 4 CLASES MÁS USADAS',
                posicion: 'rot-2',
                ruta:'css-bootstrap4-clases',
                activo: true
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
                nombre: 'ELEMENTOS Y DESCRIPCIÓN',
                posicion: 'rot-2',
                ruta:'dart-elementos',
                activo: true
            },
            {
                nombre: 'CRUD',
                posicion: 'rot-1',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'TERMINOS AVANZADOS',
                posicion: 'rot-2',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'CONTEXTO DART',
                posicion: 'pos-z',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'PRUEBAS UNITARIAS',
                posicion: 'pos-z',
                ruta:'home',
                activo: false
            },
        ]
    },
    /*      DB    */
    {
        id:5,
        categoria: 'db',
        rutaCategoria: 'db',
        rutaIcono: 'assets/img/categorias/sql.png',
        alturaIcono: '80',
        color: 'bg-Sql',
        post: [
            {
                nombre: 'FIREBASE',
                posicion: 'pos-z',
                ruta:'db-firebase',
                activo: true
            },
            {
                nombre: 'SQL',
                posicion: 'rot-1',
                ruta:'db-sql',
                activo: true
            },
            {
                nombre: 'SQL-SERVER',
                posicion: 'rot-2',
                ruta:'db-sql-server',
                activo: true
            },
        ]
    },
/*      DEVELOPER    */
    {
        id:6,
        categoria: 'developer',
        rutaCategoria: 'developer',
        rutaIcono: 'assets/img/categorias/developer.png',
        alturaIcono: '80',
        color: 'bg-Developer',
        post: [
            {
                nombre: 'RECURSOS DE INTERNET',
                posicion: 'pos-z',
                ruta:'dev-super-recursos',
                activo: true
            },
            {
                nombre: 'CONTROLES VISUAL STUDIO CODE',
                posicion: 'rot-2',
                ruta:'dev-controles-visual-studio-code',
                activo: true
            },
            {
                nombre: 'PRINCIPIOS SOLID',
                posicion: 'rot-1',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'TERMINOS AVANZADOS',
                posicion: 'rot-2',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'CONTEXTO DART',
                posicion: 'pos-z',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'GLOSARIO',
                posicion: 'pos-z',
                ruta:'home',
                activo: true
            },
        ]
    },
/*      ELECTRON    */
    {
        id:7,
        categoria: 'electron',
        rutaCategoria: 'electron',
        rutaIcono: 'assets/img/categorias/electron.png',
        alturaIcono: '80',
        color: 'bg-Electron',
        post: [
            {
                nombre: 'INSTALACIÓN',
                posicion: 'pos-z',
                ruta:'etron-instalacion',
                activo: true,
                color: 't2'
            },
            {
                nombre: 'ELEMENTOS Y DESCRIPCIÓN',
                posicion: 'rot-2',
                ruta:'home',
                activo: false,
                color: 't2'
            },
            {
                nombre: 'CRUD',
                posicion: 'rot-1',
                ruta:'home',
                activo: false,
                color: 't2'
            },
            {
                nombre: 'TERMINOS AVANZADOS',
                posicion: 'rot-2',
                ruta:'home',
                activo: false,
                color: 't2'
            },
            {
                nombre: 'CONTEXTO ELECTRON',
                posicion: 'pos-z',
                ruta:'home',
                activo: false,
                color: 't2'
            },
            {
                nombre: 'PRUEBAS UNITARIAS',
                posicion: 'pos-z',
                ruta:'home',
                activo: false,
                color: 't2'
            },
        ]
    },
/*      FLUTTER    */
    {
        id:8,
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
                ruta:'flutter-elementos',
                activo: true
            },
            {
                nombre: 'CRUD',
                posicion: 'rot-1',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'TERMINOS AVANZADOS',
                posicion: 'rot-2',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'CONTEXTO FLUTTER',
                posicion: 'pos-z',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'PRUEBAS UNITARIAS',
                posicion: 'pos-z',
                ruta:'home',
                activo: false
            },
        ]
    },
/*      GIT    */
    {
        id:9,
        categoria: 'git',
        rutaCategoria: 'git',
        rutaIcono: 'assets/img/categorias/git-light.png',
        alturaIcono: '80',
        color: 'bg-Git',
        post: [
            {
                nombre: 'INSTALACIÓN',
                posicion: 'pos-z',
                ruta:'home',
                activo: true
            },
            {
                nombre: 'ELEMENTOS Y DESCRIPCIÓN',
                posicion: 'rot-2',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'TERMINOS AVANZADOS',
                posicion: 'rot-2',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'CONTEXTO GIT',
                posicion: 'pos-z',
                ruta:'home',
                activo: false
            }
        ]
    },
/*      HTML    */
    {
        id:10,
        categoria: 'html',
        rutaCategoria: 'html',
        rutaIcono: 'assets/img/categorias/html-white.png',
        alturaIcono: '80',
        color: 'bg-Html',
        post: [
            {
                nombre: 'ETIQUETAS',
                posicion: 'pos-z',
                ruta:'html-etiquetas',
                activo: true
            },
            {
                nombre: 'ELEMENTOS Y DESCRIPCIÓN',
                posicion: 'rot-2',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'CRUD',
                posicion: 'rot-1',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'TERMINOS AVANZADOS',
                posicion: 'rot-2',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'CONTEXTO',
                posicion: 'pos-z',
                ruta:'home',
                activo: false
            },
            {
                nombre: 'PRUEBAS UNITARIAS',
                posicion: 'pos-z',
                ruta:'home',
                activo: false
            },
        ]
    },
/*      JAVA    */
    {
        id:11,
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
                activo: true
            },
            {
                nombre: 'ELEMENTOS Y DESCRIPCIÓN',
                posicion: 'rot-2',
                ruta:'java-elementos',
                activo: false
            },
            {
                nombre: 'GLASSFISH',
                posicion: 'rot-1',
                ruta:'java-glassfish',
                activo: true
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
        id:12,
        categoria: 'javascript',
        rutaCategoria: 'javascript',
        rutaIcono: 'assets/img/categorias/javascript.png',
        alturaIcono: '80',
        color: 'bg-Javascript',
        post: [
            {
                nombre: 'ELEMENTOS',
                posicion: 'rot-2',
                ruta:'js-elementos',
                activo: true,
                color: 't2 textoHoverBlanco'
            },
            {
                nombre: 'RECORRER ARRAYS OBJETOS',
                posicion: 'pos-z',
                ruta:'js-recorrer-arrays-objetos',
                activo: true,
                color: 't2 textoHoverBlanco'
            },
            {
                nombre: 'TRABAJO CON FECHAS',
                posicion: 'rot-1',
                ruta:'js-trabajo-fechas',
                activo: true,
                color: 't2 textoHoverBlanco'
            },
            {
                nombre: 'TERMINOS AVANZADOS',
                posicion: 'rot-2',
                ruta:'home',
                activo: false,
                color: 't2 textoHoverBlanco'
            },
            {
                nombre: 'CONTEXTO DART',
                posicion: 'pos-z',
                ruta:'home',
                activo: false,
                color: 't2 textoHoverBlanco'
            },
        ],
        postMas: [
            {
                subCategoria: 'Node JS',
                post: [
                    {
                        nombre: 'NODE JS CON NVM',
                        posicion: 'rot-2',
                        ruta: 'js-instalando-node-con-nvm',
                        activo: true,
                        color: 't2 textoHoverBlanco'
                    }
                ]
            },
            {
                subCategoria: 'Typescript',
                post: [
                    {
                        nombre: 'ELEMENTOS',
                        posicion: 'rot-2',
                        ruta: 'home',
                        activo: true,
                        color: 't2 textoHoverBlanco'
                    },
                ]
            },
        ],
    },
/*      KOTLIN    */
/*     {
        id:13,
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
    }, */
/*      KUBERNETES    */
/*     {
        id:14,
        categoria: 'kubernetes',
        rutaCategoria: 'kubernetes',
        rutaIcono: 'assets/img/categorias/kubernetes.png',
        alturaIcono: '100',
        color: 'bg-Kubernetes',
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
    }, */
/*      LINUX    */
/*     {
        id:15,
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
    }, */
    /*      NET-FRAMEWORK    */
/*     {
        id:16,
        categoria: 'net',
        rutaCategoria: 'net',
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
                ruta:'net-descripcion-elementos',
                activo: true
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
    }, */
/*      PHP    */
/*     {
        id:17,
        categoria: 'php',
        rutaCategoria: 'php',
        rutaIcono: 'assets/img/categorias/php.png',
        alturaIcono: '80',
        color: 'bg-Php',
        post: [
            {
                nombre: 'PHP DESCRIPCIÓN ELEMENTOS',
                posicion: 'rot-2',
                ruta:'php-elementos',
                activo: true
            },
        ]
    }, */
/*      REACT    */
/*     {
        id:18,
        categoria: 'react',
        rutaCategoria: 'react',
        rutaIcono: 'assets/img/categorias/react-white.png',
        alturaIcono: '80',
        color: 'bg-React',
        post: [
            {
                nombre: 'INSTALACIÓN',
                posicion: 'pos-z',
                ruta:'net-instalacion',
                activo: false,
                color: 't2'
            },
            {
                nombre: 'ELEMENTOS Y DESCRIPCIÓN',
                posicion: 'rot-2',
                ruta:'net-descripcion-elementos',
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
    }, */
/*      SENA    */
    {
        id:19,
        categoria: 'sena',
        rutaCategoria: 'sena',
        rutaIcono: 'assets/img/categorias/sena.png',
        alturaIcono: '80',
        color: 'bg-Sena',
        post: [
            {
                nombre: 'FICHA 2276732',
                posicion: 'pos-z',
                ruta:'sena-ficha-actual',
                activo: true
            },
            {
                nombre: 'RECURSOS INFORMATIVOS',
                posicion: 'rot-2',
                ruta:'sena-recursos-informativos',
                activo: false
            }
        ]
    },
    /*      WORDPRESS    */
    {
        id:20,
        categoria: 'wordpress',
        rutaCategoria: 'wordpress',
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

