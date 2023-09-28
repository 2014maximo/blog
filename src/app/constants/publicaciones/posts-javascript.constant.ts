import { DatosPost, EstilosPost, RefImg } from '@shared/models/categorias.model';

export const ESTILO_JAVASCRIPT: EstilosPost = {
    color: 'c-Javascript',
    colorFondo: 'bg-Javascript'
}


export const JAVASCRIPT: DatosPost[] = [
    {
        id: '3574124706',
        nombre: 'JAVASCRIPT',
        descripcion: [],
        descripcionCorta: '',
        ruta: 'javascript',
        componente: 'JavascriptComponent',
        categoria: 'javascript',
        mostrarEnPostHome: false,
        estilos: ESTILO_JAVASCRIPT,
        fechaCreacion: '2020-04-04',
        fechaActualizacion: '2020-04-04',
        imgHorizontal: new RefImg(),
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-1',
        estado: 'inactivo'
    },
    {
        id: 'c79624d0-b839-465a-9879-461267c01f6b',
        nombre: 'Elementos javascript',
        descripcion: [
            'Descripción rápida de la aplicación de lo elementos que hacen parte de typescript, similares en gran parte a Javascript, ya obviamente la aplicación de lo particular de typescript que son los tipos.'
        ],
        descripcionCorta: 'Detalle de los elementos que hacen parte de Typescript, detallando en contraparte a Javascript.',
        ruta: 'js-elementos',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_JAVASCRIPT,
        fechaCreacion: '2023-09-06',
        fechaActualizacion: '2023-09-14',
        imgHorizontal: new RefImg('https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg'),
        imgVertical:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        imgCuadro:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        categoria: 'javascript',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: {
            alt: 'Elementos Javascript',
            height: '600',
            id: '2',
            ruta: 'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-SLIDER.jpg',
            width: 'auto',
            post: 'js-elementos'
        }
    },
    {
        id: 'bd16e1f4-b3dd-45d6-8400-c9e0a5ced350',
        nombre: 'Recorrido de arrays',
        descripcion: [
            'Descripción rápida de la aplicación de lo elementos que hacen parte de typescript, similares en gran parte a Javascript, ya obviamente la aplicación de lo particular de typescript que son los tipos.'
        ],
        descripcionCorta: 'Detalle de los elementos que hacen parte de Typescript, detallando en contraparte a Javascript.',
        ruta: 'js-recorrer-arrays-objetos',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_JAVASCRIPT,
        fechaCreacion: '2023-09-06',
        fechaActualizacion: '2023-09-14',
        imgHorizontal: new RefImg('https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg'),
        imgVertical:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        imgCuadro:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        categoria: 'javascript',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: {
            alt: 'Recorrido de arrays',
            height: '600',
            id: '2',
            ruta: 'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-SLIDER.jpg',
            width: 'auto',
            post: 'js-recorrer-arrays-objetos'
        }
    },
]