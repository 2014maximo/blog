import { DatosPost, EstilosPost, RefImg } from "@shared/models/categorias.model"

export const ESTILO_ELECTRON: EstilosPost = {
    color: 'c-Electron',
    colorFondo: 'bg-Electron'
}

export const ELECTRON: DatosPost[] = [
    {
        id: '1bbe7bbd-9f75-44da-8165-a5fde2070e2b',
        nombre: 'Electrón',
        descripcion: [],
        descripcionCorta: '',
        ruta: 'electron',
        componente: 'ElectronComponent',
        mostrarEnPostHome: false,
        estilos: ESTILO_ELECTRON,
        fechaCreacion: '2020-08-02',
        fechaActualizacion: '2020-08-02',
        imgHorizontal: new RefImg(),
        imgVertical:'',
        imgCuadro:'',
        categoria: 'electron',
        posicion: 'rot-1',
        estado: 'inactivo'
    },
    {
        id: '456b48d2-6bd8-455f-b888-53adf98abb85',
        nombre: 'Elementos Electrón',
        descripcion: [
            'Descripción rápida de la aplicación de lo elementos que hacen parte de typescript, similares en gran parte a Javascript, ya obviamente la aplicación de lo particular de typescript que son los tipos.'
        ],
        descripcionCorta: 'Detalle de los elementos que hacen parte de Typescript, detallando en contraparte a Javascript.',
        ruta: 'etron-elementos',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_ELECTRON,
        fechaCreacion: '2023-09-14',
        fechaActualizacion: '',
        imgHorizontal: new RefImg('https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg'),
        imgVertical:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        imgCuadro:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        categoria: 'electron',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: {
            alt: 'Elementos Eletrón',
            height: '600',
            id: '2',
            ruta: 'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-SLIDER.jpg',
            width: 'auto',
            post: 'etron-elementos'
        }
    },
    {
        id: '0b061731-9966-4aee-b6bd-d334fe6dc2a5',
        nombre: 'Electrón instalación',
        descripcion: [
            'Descripción rápida de la aplicación de lo elementos que hacen parte de typescript, similares en gran parte a Javascript, ya obviamente la aplicación de lo particular de typescript que son los tipos.'
        ],
        descripcionCorta: 'Detalle de los elementos que hacen parte de Typescript, detallando en contraparte a Javascript.',
        ruta: 'etron-instalacion',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_ELECTRON,
        fechaCreacion: '2023-09-14',
        fechaActualizacion: '',
        imgHorizontal: new RefImg('https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg'),
        imgVertical:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        imgCuadro:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        categoria: 'electron',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: {
            alt: 'Electrón instalación',
            height: '600',
            id: '2',
            ruta: 'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-SLIDER.jpg',
            width: 'auto',
            post: 'etron-instalación'
        }
    },
]