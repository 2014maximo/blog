import { DatosPost, EstilosPost } from '../../shared/models/categorias.model';

export const ESTILO_FLUTTER: EstilosPost = {
    color: 'c-Flutter',
    colorFondo: 'bg-Flutter'
}

export const FLUTTER: DatosPost[] = [
    {
        id: '9249441409',
        nombre: 'Flutter',
        descripcion: [],
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
        id: '70d34b42-d1bf-4920-b217-ef6b09ff42d6',
        nombre: 'Flutter instalación',
        descripcion: [
            'Descripción rápida de la aplicación de lo elementos que hacen parte de typescript, similares en gran parte a Javascript, ya obviamente la aplicación de lo particular de typescript que son los tipos.'
        ],
        descripcionCorta: 'Esta vez tenemos descripción rápida de la instalación junto con las versiones, los cambios y el link para descargar una versión específica.',
        ruta: 'flutter-instalacion',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_FLUTTER,
        fechaCreacion: '2023-09-14',
        fechaActualizacion: '',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg',
        imgVertical:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        imgCuadro:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        categoria: 'flutter',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: {
            alt: 'Flutter instalación',
            height: '600',
            id: '2',
            ruta: 'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-SLIDER.jpg',
            width: 'auto',
            post: 'flutter-instalacion'
        }
    },
    {
        id: '73913100-7f71-49a2-8e8e-b25464880ea7',
        nombre: 'Flutter elementos',
        descripcion: [
            'Descripción rápida de la aplicación de lo elementos que hacen parte de typescript, similares en gran parte a Javascript, ya obviamente la aplicación de lo particular de typescript que son los tipos.'
        ],
        descripcionCorta: 'Detalle de los elementos que hacen parte de Typescript, detallando en contraparte a Javascript.',
        ruta: 'flutter-elementos',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_FLUTTER,
        fechaCreacion: '2023-09-14',
        fechaActualizacion: '',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg',
        imgVertical:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        imgCuadro:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        categoria: 'flutter',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: {
            alt: 'Flutter elementos',
            height: '600',
            id: '2',
            ruta: 'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-SLIDER.jpg',
            width: 'auto',
            post: 'flutter-elementos'
        }
    }
]