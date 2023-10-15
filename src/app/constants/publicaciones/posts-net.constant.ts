import { DatosPost, EstilosPost, RefImg } from '@shared/models/categorias.model';

export const ESTILO_NET: EstilosPost = {
    color: 'c-Net',
    colorFondo: 'bg-Net'
}

export const NET: DatosPost[] = [
    {
        id: 'a51c1552-365b-4012-9afd-28637fe5c1d7',
        nombre: 'NET',
        descripcion: [],
        descripcionCorta: '',
        ruta: 'net',
        componente: 'NetComponent',
        categoria: 'net',
        mostrarEnPostHome: false,
        estilos: ESTILO_NET,
        fechaCreacion: '2020-09-15',
        fechaActualizacion: '',
        imgHorizontal: new RefImg(),
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-1',
        estado: 'inactivo'
    },
    {
        id: '23ef844e-de15-49b8-bda3-aded4000630e',
        nombre: 'Elementos net',
        descripcion: [
            'Descripción rápida de la aplicación de lo elementos que hacen parte de typescript, similares en gran parte a Javascript, ya obviamente la aplicación de lo particular de typescript que son los tipos.'
        ],
        descripcionCorta: 'Detalle de los elementos que hacen parte de Typescript, detallando en contraparte a Javascript.',
        ruta: 'net-elementos',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_NET,
        fechaCreacion: '2023-09-15',
        fechaActualizacion: '',
        imgHorizontal: new RefImg('https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg'),
        imgVertical:'',
        imgCuadro:'',
        categoria: 'net',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: {
            alt: 'Elementos Net',
            height: '600',
            id: '2',
            ruta: 'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-SLIDER.jpg',
            width: 'auto',
            post: 'kotlin-elementos'
        }
    },
    {
        id: 'e0fd17aa-bb97-4bec-901a-a6d4e0e4eba2',
        nombre: 'Instalación net',
        descripcion: [
            'Descripción rápida de la aplicación de lo elementos que hacen parte de typescript, similares en gran parte a Javascript, ya obviamente la aplicación de lo particular de typescript que son los tipos.'
        ],
        descripcionCorta: 'Detalle de los elementos que hacen parte de Typescript, detallando en contraparte a Javascript.',
        ruta: 'net-instalacion',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_NET,
        fechaCreacion: '2023-09-15',
        fechaActualizacion: '',
        imgHorizontal: new RefImg('https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg'),
        imgVertical:'',
        imgCuadro:'',
        categoria: 'net',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: {
            alt: 'Elementos Instalación',
            height: '600',
            id: '2',
            ruta: 'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-SLIDER.jpg',
            width: 'auto',
            post: 'kotlin-instalacion'
        }
    },
]