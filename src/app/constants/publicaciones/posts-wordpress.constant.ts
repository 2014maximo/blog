import { DatosPost, EstilosPost, RefImg } from '@shared/models/categorias.model';

export const ESTILO_WORDPRESS: EstilosPost = {
    color: 'c-Wordpress',
    colorFondo: 'bg-Wordpress'
}

export const WORDPRESS: DatosPost[] = [
    {
        id: '66418d5a-10b3-47e4-8f6d-fe527c5c53af',
        nombre: 'Wordpress',
        descripcion: [],
        descripcionCorta: '',
        ruta: 'wordpress',
        componente: 'WordpressComponent',
        categoria: 'wordpress',
        mostrarEnPostHome: false,
        estilos: ESTILO_WORDPRESS,
        fechaCreacion: '2020-09-15',
        fechaActualizacion: '',
        imgHorizontal: new RefImg(),
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-1',
        estado: 'inactivo'
    },
    {
        id: 'a4c97578-bdf9-46c3-a376-23b8814687ae',
        nombre: 'Elementos Wordpress',
        descripcion: [
            'Descripción rápida de la aplicación de lo elementos que hacen parte de typescript, similares en gran parte a Javascript, ya obviamente la aplicación de lo particular de typescript que son los tipos.'
        ],
        descripcionCorta: 'Detalle de los elementos que hacen parte de Typescript, detallando en contraparte a Javascript.',
        ruta: 'wordpress-elementos',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_WORDPRESS,
        fechaCreacion: '2023-09-15',
        fechaActualizacion: '',
        imgHorizontal: new RefImg('https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg'),
        imgVertical:'',
        imgCuadro:'',
        categoria: 'wordpress',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: {
            alt: 'Elementos Wordpress',
            height: '600',
            id: '2',
            ruta: 'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-SLIDER.jpg',
            width: 'auto',
            post: 'wordpress-elementos'
        }
    }
]