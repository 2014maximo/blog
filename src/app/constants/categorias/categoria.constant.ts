import { ANGULAR } from '../publicaciones/posts-angular.constant';
import { ANDROID } from '../publicaciones/posts-android.constant';
import { CSS } from '../publicaciones/posts-css.constant';
import { DART } from '../publicaciones/posts-dart.constant';
import { DEVELOPER } from '../publicaciones/posts-developer.constant';
import { ELECTRON } from '../publicaciones/posts-electron.contant';
import { FLUTTER } from '../publicaciones/posts-flutter.contant';
import { GIT } from '../publicaciones/posts-git.constant';
import { HTML } from '../publicaciones/posts-html.constant';
import { JAVASCRIPT } from '../publicaciones/posts-javascript.constant';
import { DB } from '../publicaciones/posts-db.constant';
import { CategoriaPostModel } from '../../shared/models/categorias.model';
import { JAVA } from '../publicaciones/posts-java.constant';
import { LINUX } from '../publicaciones/posts-linux.constant';
import { TERMINOS_ANGULAR } from '../glosarios/terminos.angular.constant';
import { SUB_NG } from '../subcategorias/subcategorias-angular.constant';
import { TERMINOS_DEVELOPER } from '../glosarios/terminos.developer.constant';
import { TYPESCRIPT } from '../publicaciones/posts-typescript.constant';
import { KOTLIN } from '@constants/publicaciones/posts-kotlin.constant';
import { PHP } from '@constants/publicaciones/posts-php.constant';
import { REACT } from '@constants/publicaciones/posts-react.constant';
import { WORDPRESS } from '@constants/publicaciones/posts-wordpress.constant';
import { TERMINOS_LINUX } from '@constants/glosarios/terminos.linux.constant';
import { KUBERNETES } from '@constants/publicaciones/posts-kubernetes.constant';
import { NET } from '@constants/publicaciones/posts-net.constant';

export const CATEGORIA: CategoriaPostModel[] = [
    {
        id:1,
        nombre: 'android',
        posicion: 'pos-z',
        abertura: '',
        rutaIcono: 'assets/img/categorias/android.png',
        alturaIcono: '80%',
        estado:'inactivo',
        ruta: 'android',
        glosario: [],
        colorFondo: 'bg-Android',
        color: 'c-Android',
        descripcion: [
            {
                autor: '',
                linkAlAutor:'',
                descripciones: [
                    'Android ...'
                ]
            }
        ],
        descripcionCorta: '',
        post: ANDROID,
        subcategorias: []
    },
    {
        id:2,
        nombre: 'angular',
        posicion: 'rot-2',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/angular.png',
        alturaIcono: '80',
        estado:'activo',
        ruta: 'angular',
        colorFondo: 'bg-Angular',
        glosario: TERMINOS_ANGULAR,
        color: 'c-Angular',
        descripcion: [
            {
                autor: 'Alex M.',
                linkAlAutor: '',
                descripciones: [
                    ''
                ]
            }
        ],
        descripcionCorta: '',
        post: ANGULAR,
        subcategorias: SUB_NG
    },
    {
        id:3,
        nombre: 'css',
        posicion: 'pos-z',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/css.png',
        alturaIcono: '80',
        estado:'activo',
        glosario: [],
        ruta: 'css',
        colorFondo: 'bg-Css',
        color: 'c-Css',
        descripcion: [{
            autor:'',
            linkAlAutor:'',
            descripciones: [
                '']
        }],
        descripcionCorta: '',
        post: CSS,
        subcategorias: []
    },
    {
        id:4,
        nombre: 'dart',
        posicion: 'rot-2',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/dart_text_white.png',
        alturaIcono: '40',
        estado:'activo',
        glosario: [],
        ruta: 'dart',
        colorFondo: 'bg-Dart',
        color: 'c-Dart',
        descripcion: [
            {
                autor:'',
                linkAlAutor:'',
                descripciones: ['']
            }
        ],
        descripcionCorta: '',
        post: DART,
        subcategorias: []
    },
    {
        id:5,
        nombre: 'db',
        posicion: 'rot-2',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/sql.png',
        alturaIcono: '55',
        estado:'activo',
        glosario: [],
        ruta: 'db',
        colorFondo: 'bg-Sql',
        color: 'c-Sql',
        descripcion: [
            {
                autor:'',
                linkAlAutor: '',
                descripciones:[
                    ''
                ]
            }
        ],
        descripcionCorta: '',
        post: DB,
        subcategorias: []
    },
    {
        id:6,
        nombre: 'developer',
        posicion: 'rot-2',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/developer.png',
        alturaIcono: '90',
        estado:'activo',
        ruta: 'developer',
        glosario: TERMINOS_DEVELOPER,
        colorFondo: 'bg-Developer',
        color: 'c-Developer',
        descripcion: [
            {
                autor: '',
                linkAlAutor: '',
                descripciones: [
                    ''
                ]
            }
        ],
        descripcionCorta: '',
        post: DEVELOPER,
        subcategorias: []
    },
    {
        id:7,
        nombre: 'electron',
        posicion: 'pos-z',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/electron.png',
        alturaIcono: '90',
        estado:'activo',
        ruta: 'electron',
        glosario: [],
        colorFondo: 'bg-Electron',
        color: 'c-Electron',
        descripcion: [
            {
                autor:'',
                linkAlAutor:'',
                descripciones:[
                    ''
                ]
            }
        ],
        descripcionCorta: '',
        post: ELECTRON,
        subcategorias: []
    },
    {
        id:8,
        nombre: 'flutter',
        posicion: 'rot-1',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/flutter_text_white.png',
        alturaIcono: '80',
        estado:'activo',
        glosario: [],
        ruta: 'flutter',
        colorFondo: 'bg-Flutter',
        color: 'c-Flutter',
        descripcion: [
            {
                autor:'',
                linkAlAutor:'',
                descripciones:[
                    ''
                ]
            }
        ],
        descripcionCorta: '',
        post: FLUTTER,
        subcategorias: []
    },
    {
        id:9,
        nombre: 'git',
        posicion: 'rot-3',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/git-light.png',
        alturaIcono: '60',
        estado:'activo',
        glosario: [],
        ruta: 'git',
        colorFondo: 'bg-Git',
        color: 'c-Git',
        descripcion: [
            {
                autor:'',
                linkAlAutor:'',
                descripciones:[
                    ''
                ]
            }
        ],
        descripcionCorta: '',
        post: GIT,
        subcategorias: []
    },
    {
        id:10,
        nombre: 'html',
        posicion: 'pos-z',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/html-white.png',
        alturaIcono: '80',
        estado:'activo',
        ruta: 'html',
        glosario: [],
        colorFondo: 'bg-Html',
        color: 'c-Html',
        descripcion: [{
            autor:'',
            descripciones:[
                ''
            ],
            linkAlAutor: ''
        }],
        descripcionCorta: '',
        post: HTML,
        subcategorias: []
    },
    {
        id:11,
        nombre: 'java',
        posicion: 'rot-2',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/logo-java.png',
        alturaIcono: '100',
        estado:'activo',
        glosario: [],
        ruta: 'java',
        colorFondo: 'bg-Java',
        color: 'c-Java',
        descripcion: [
            {
                linkAlAutor:'',
                autor:'',
                descripciones:[
                    ''
                ]
            }
        ],
        descripcionCorta: '',
        post: JAVA,
        subcategorias: []
    },
    {
        id:12,
        nombre: 'javascript',
        abertura: '80%',
        posicion: 'rot-2',
        rutaIcono: 'assets/img/categorias/javascript.png',
        alturaIcono: '80',
        estado:'activo',
        ruta: 'javascript',
        glosario: [],
        colorFondo: 'bg-Javascript',
        color: 'c-Javascript',
        descripcion: [
            {
                linkAlAutor:'',
                autor:'',
                descripciones:[
                    ''
                ]
            }
        ],
        descripcionCorta: '',
        post: JAVASCRIPT,
        subcategorias: []
    },
    {
        id:13,
        nombre: 'kotlin',
        posicion: 'pos-z',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/kotlin-white.png',
        alturaIcono: '60',
        estado:'activo',
        ruta: 'kotlin',
        glosario: [],
        colorFondo: 'bg-Kotlin',
        color: 'c-Kotlin',
        descripcion: [
            {
                autor:'',
                linkAlAutor:'',
                descripciones: [
                    ''
                ]
            }
        ],
        descripcionCorta: '',
        post: KOTLIN,
        subcategorias: []
    },
    {
        id:14,
        nombre: 'kubernetes',
        posicion: 'pos-z',
        abertura: '',
        rutaIcono: 'assets/img/categorias/kubernetes.png',
        alturaIcono: '100',
        estado:'inactivo',
        glosario: [],
        ruta: 'kubernetes',
        colorFondo: 'bg-Kubernetes',
        color: 'c-Kubernetes',
        descripcion: [
            {
                autor:'',
                linkAlAutor:'',
                descripciones: [
                    ''
                ]
            }
        ],
        descripcionCorta: '',
        post: KUBERNETES,
        subcategorias: []
    },
    {
        id:13,
        nombre: 'linux',
        posicion: 'rot-2',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/linux-white.png',
        alturaIcono: '60',
        estado:'activo',
        glosario: TERMINOS_LINUX,
        ruta: 'linux',
        colorFondo: 'bg-Linux',
        color: 'c-Linux',
        descripcion: [
            {
                autor:'',
                linkAlAutor:'',
                descripciones:[
                    ''
                ]
            }
        ],
        descripcionCorta: '',
        post: LINUX,
        subcategorias: []
    },
    {
        id:14,
        nombre: 'net',
        posicion: 'rot-2',
        abertura: '',
        rutaIcono: 'assets/img/categorias/net-framework.png',
        alturaIcono: '80',
        glosario: [],
        estado:'inactivo',
        ruta: 'net',
        colorFondo: 'bg-Net',
        color: 'c-Net',
        descripcion: [
            {
                autor:'',
                linkAlAutor:'',
                descripciones:[
                    'Net se origino como ...'
                ]
            }
        ],
        descripcionCorta: '',
        post: NET,
        subcategorias: []
    },
    {
        id:15,
        nombre: 'php',
        posicion: 'rot-2',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/php.png',
        alturaIcono: '70',
        estado:'activo',
        glosario: [],
        ruta: 'php',
        colorFondo: 'bg-Php',
        color: 'c-Php',
        descripcion: [
            {
                autor:'',
                linkAlAutor:'',
                descripciones:[
                    'Php al principio ...'
                ]
            }
        ],
        descripcionCorta: '',
        post: PHP,
        subcategorias: []
    },
    {
        id:16,
        nombre: 'react',
        posicion: 'rot-2',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/react.png',
        alturaIcono: '100',
        estado:'activo',
        glosario: [],
        ruta: 'react',
        colorFondo: 'bg-React',
        color: ' c-React',
        descripcion: [
            {
                autor:'',
                linkAlAutor:'',
                descripciones:[
                    'React se originó ...'
                ]
            }
        ],
        descripcionCorta: '',
        post: REACT,
        subcategorias: []
    },
    {
        id:17,
        nombre: 'typescript',
        posicion: 'rot-2',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/typescript.png',
        alturaIcono: '40',
        estado:'activo',
        glosario: [],
        ruta: 'typescript',
        colorFondo: 'bg-Typescript',
        color: ' c-Typescript',
        descripcion: [
            {
                autor:'',
                linkAlAutor:'',
                descripciones:[
                    'Typescript ...'
                ]
            }
        ],
        descripcionCorta: '',
        post: TYPESCRIPT,
        subcategorias: []
    },
    {
        id:18,
        nombre: 'wordpress',
        posicion: 'rot-2',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/wordpress2.png',
        alturaIcono: '80',
        estado:'activo',
        glosario: [],
        ruta: 'wordpress',
        colorFondo: 'bg-Wordpress',
        color: 'c-Wordpress',
        descripcion: [
            {
                autor: '',
                linkAlAutor:'',
                descripciones:[
                    'Wordpress se inicio como ...'
                ]
            }
        ],
        descripcionCorta: '',
        post: WORDPRESS,
        subcategorias: []
    },
]