import { DatosPost, EstilosPost } from '../../shared/models/categorias.model';

export const ESTILO_DART: EstilosPost = {
    color: 'c-Dart',
    colorFondo: 'bg-Dart'
}

export const DART: DatosPost[] = [
    {
        id: '2288525419',
        nombre: 'Dart',
        descripcion: ['Dart con sus altibajos, entra de nuevo al ruedo con Flutter, sin embargo es importante saber que ventajas nos ofrece sobre otros lenguajes para poder elegirlo.'],
        descripcionCorta: 'Dart con sus altibajos, entra de nuevo al ruedo con Flutter, sin embargo es importante saber que ventajas nos ofrece sobre otros lenguajes para poder elegirlo.',
        ruta: '',
        componente: '',
        categoria: 'dart',
        mostrarEnPostHome: false,
        estilos: ESTILO_DART,
        fechaCreacion: '2021-02-02',
        fechaActualizacion: '2022-10-02',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-2',
        estado: 'inactivo'
    },
    {
        id: 'abca9c03-f685-47df-aa15-8c52051955c2',
        nombre: 'Elementos dart',
        descripcion: [
            'Descripción rápida de la aplicación de lo elementos que hacen parte de typescript, similares en gran parte a Javascript, ya obviamente la aplicación de lo particular de typescript que son los tipos.'
        ],
        descripcionCorta: 'Detalle de los elementos que hacen parte de Typescript, detallando en contraparte a Javascript.',
        ruta: 'dart-elementos',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_DART,
        fechaCreacion: '2023-09-11',
        fechaActualizacion: '',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg',
        imgVertical:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        imgCuadro:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        categoria: 'dart',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: {
            alt: 'Instalación Angular y recomendados',
            height: '600',
            id: '2',
            ruta: 'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-SLIDER.jpg',
            width: 'auto',
            post: 'ng-instalacion'
        }
    }
]