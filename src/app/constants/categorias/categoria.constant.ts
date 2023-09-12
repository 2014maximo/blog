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
        descripcion: [],
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
                    'AngularJS comenzó a ser desarrollado en 2009 por Miško Hevery originalmente era un servicio de almacenamiento online de archivos JSON donde el cobro dependía del peso en     megabytes de cada archivo. Tiempo después abandonó el proyecto y re lanzó angular como un proyecto open-source.',
                    'Angular comenzó con la primera versión de AngularJS, que estaba escrito en puro JavaScript, y con el que era bastante sencillo crear una aplicación.',
                    'AngularJS ofrecía un concepto muy novedoso, como era el two-way data binding, que era una forma de interactuar entre la vista y el modelo, lo que se conoce como view model.',
                    'Gracias al mismo, indicando en ciertas propiedades de HTML la directiva ng-model se podía interactuar con las propiedades del modelo, y se actualizaban tanto desde la vista como','desde el modelo, es decir, era totalmente bidireccional.',
                    'Esto revolucionó todo lo que hasta ese momento había en el frontend.'
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
        abertura: '',
        rutaIcono: 'assets/img/categorias/css.png',
        alturaIcono: '80',
        estado:'inactivo',
        glosario: [],
        ruta: 'css',
        colorFondo: 'bg-Css',
        color: 'c-Css',
        descripcion: [],
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
                descripciones: ['El lenguaje de programación Dart nació en 2011 con el modesto objetivo de arreglar la web. En otras palabras, intentar reemplazar JavaScript en el navegador. Sin embargo, fracasó miserablemente en aquel entonces.',
                'Esto quedó claro cuando Google anunció en marzo de 2015 que no incluiría la VM de Dart en Chrome, sino que se centraría en el compilador de Dart-to-JS.',
                'Esto le pareció un golpe mortal a Dart. Después de todo, ahora estaba relegado a un mero lenguaje de compilación a JS, sólo uno de muchos.',
                'Para la mayoría de la gente, el lenguaje estaba en camino de desaparecer rápidamente y convertirse en una pequeña nota a pie de página en la historia de los lenguajes de programación. Pero el lenguaje sobrevivió y, al menos en Google, continuó prosperando.',
                'En mayo de 2017, Google lanzó la primera versión alfa pública del lenguaje Dart Flutter, un marco de desarrollo de interfaz de usuario multiplataforma, que utiliza Dart para crear aplicaciones móviles tanto para iOS como para Android. Con el tiempo, Flutter empezó a ser muy popular.',
                'Eso dio nueva vida al proyecto Dart, y con los lanzamientos de Dart 2 en agosto de 2018, y Flutter 1.0 poco después, quedó claro que Dart está absolutamente de vuelta en la ciudad, y podemos decir que va a ser una de las tecnologías de más rápido crecimiento actualmente.']
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
        abertura: '',
        rutaIcono: 'assets/img/categorias/sql.png',
        alturaIcono: '55',
        estado:'inactivo',
        glosario: [],
        ruta: 'db',
        colorFondo: 'bg-Sql',
        color: 'c-Sql',
        descripcion: [],
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
                autor: 'Alex M.',
                linkAlAutor: '',
                descripciones: [
                    'En la década entre 1950 y 1960 aparecen los términos de ingeniería del software.'
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
        abertura: '',
        rutaIcono: 'assets/img/categorias/electron.png',
        alturaIcono: '90',
        estado:'inactivo',
        ruta: 'electron',
        glosario: [],
        colorFondo: 'bg-Electron',
        color: 'c-Electron',
        descripcion: [],
        descripcionCorta: '',
        post: ELECTRON,
        subcategorias: []
    },
    {
        id:8,
        nombre: 'flutter',
        posicion: 'rot-1',
        abertura: '',
        rutaIcono: 'assets/img/categorias/flutter_text_white.png',
        alturaIcono: '80',
        estado:'inactivo',
        glosario: [],
        ruta: 'flutter',
        colorFondo: 'bg-Flutter',
        color: 'c-Flutter',
        descripcion: [],
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
        descripcion: [],
        descripcionCorta: '',
        post: GIT,
        subcategorias: []
    },
    {
        id:10,
        nombre: 'html',
        posicion: 'pos-z',
        abertura: '',
        rutaIcono: 'assets/img/categorias/html-white.png',
        alturaIcono: '80',
        estado:'inactivo',
        ruta: 'html',
        glosario: [],
        colorFondo: 'bg-Html',
        color: 'c-Html',
        descripcion: [],
        descripcionCorta: '',
        post: HTML,
        subcategorias: []
    },
    {
        id:11,
        nombre: 'java',
        posicion: 'rot-2',
        abertura: '',
        rutaIcono: 'assets/img/categorias/logo-java.png',
        alturaIcono: '100',
        estado:'inactivo',
        glosario: [],
        ruta: 'java',
        colorFondo: 'bg-Java',
        color: 'c-Java',
        descripcion: [],
        descripcionCorta: '',
        post: JAVA,
        subcategorias: []
    },
    {
        id:12,
        nombre: 'javascript',
        abertura: '',
        posicion: 'rot-2',
        rutaIcono: 'assets/img/categorias/javascript.png',
        alturaIcono: '80',
        estado:'inactivo',
        ruta: 'javascript',
        glosario: [],
        colorFondo: 'bg-Javascript',
        color: 'c-Javascript',
        descripcion: [],
        descripcionCorta: '',
        post: JAVASCRIPT,
        subcategorias: []
    },
    {
        id:13,
        nombre: 'kotlin',
        posicion: 'pos-z',
        abertura: '',
        rutaIcono: 'assets/img/categorias/kotlin.png',
        alturaIcono: '60',
        estado:'inactivo',
        ruta: 'kotlin',
        glosario: [],
        colorFondo: 'bg-Kotlin',
        color: 'c-Kotlin',
        descripcion: [],
        descripcionCorta: '',
        post: JAVASCRIPT,
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
        descripcion: [],
        descripcionCorta: '',
        post: JAVASCRIPT,
        subcategorias: []
    },
    {
        id:13,
        nombre: 'linux',
        posicion: 'rot-2',
        abertura: '',
        rutaIcono: 'assets/img/categorias/linux-white.png',
        alturaIcono: '60',
        estado:'inactivo',
        glosario: [],
        ruta: 'linux',
        colorFondo: 'bg-Linux',
        color: 'c-Linux',
        descripcion: [],
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
        colorFondo: 'bg-NetFramework',
        color: 'c-NetFramework',
        descripcion: [],
        descripcionCorta: '',
        post: JAVASCRIPT,
        subcategorias: []
    },
    {
        id:15,
        nombre: 'php',
        posicion: 'rot-2',
        abertura: '',
        rutaIcono: 'assets/img/categorias/php.png',
        alturaIcono: '70',
        estado:'inactivo',
        glosario: [],
        ruta: 'php',
        colorFondo: 'bg-Php',
        color: 'c-Php',
        descripcion: [],
        descripcionCorta: '',
        post: JAVASCRIPT,
        subcategorias: []
    },
    {
        id:16,
        nombre: 'react',
        posicion: 'rot-2',
        abertura: '',
        rutaIcono: 'assets/img/categorias/react.png',
        alturaIcono: '100',
        estado:'inactivo',
        glosario: [],
        ruta: 'react',
        colorFondo: 'bg-React',
        color: ' c-React',
        descripcion: [],
        descripcionCorta: '',
        post: JAVASCRIPT,
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
        descripcion: [],
        descripcionCorta: '',
        post: TYPESCRIPT,
        subcategorias: []
    },
    {
        id:18,
        nombre: 'wordpress',
        posicion: 'rot-2',
        abertura: '',
        rutaIcono: 'assets/img/categorias/wordpress2.png',
        alturaIcono: '80',
        estado:'inactivo',
        glosario: [],
        ruta: 'wordpress',
        colorFondo: 'bg-Wordpress',
        color: 'c-Wordpress',
        descripcion: [],
        descripcionCorta: '',
        post: JAVASCRIPT,
        subcategorias: []
    },
]