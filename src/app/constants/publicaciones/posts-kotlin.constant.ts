import { DatosPost, EstilosPost, RefImg } from '@shared/models/categorias.model';

export const ESTILO_KOTLIN: EstilosPost = {
    color: 'c-Kotlin',
    colorFondo: 'bg-Kotlin'
}


export const KOTLIN: DatosPost[] = [
    {
        id: 'd8b1f94e-7b7e-41c1-a6d7-151e251c2889',
        nombre: 'KOTLIN',
        descripcion: [],
        descripcionCorta: '',
        ruta: 'kotlin',
        componente: 'KotlinComponent',
        categoria: 'kotlin',
        mostrarEnPostHome: false,
        estilos: ESTILO_KOTLIN,
        fechaCreacion: '2020-09-15',
        fechaActualizacion: '',
        imgHorizontal: new RefImg(),
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-1',
        estado: 'inactivo'
    },
    {
        id: '4310addc-5bed-49b2-9d60-76a1c58b1881',
        nombre: 'Elementos kotlin',
        descripcion: [
            'Descripción rápida de la aplicación de lo elementos que hacen parte de typescript, similares en gran parte a Javascript, ya obviamente la aplicación de lo particular de typescript que son los tipos.'
        ],
        descripcionCorta: 'Detalle de los elementos que hacen parte de Typescript, detallando en contraparte a Javascript.',
        ruta: 'kotlin-elementos',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_KOTLIN,
        fechaCreacion: '2023-09-15',
        fechaActualizacion: '',
        imgHorizontal: new RefImg('https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg'),
        imgVertical:'',
        imgCuadro:'',
        categoria: 'kotlin',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: {
            alt: 'Elementos Kotlin',
            height: '600',
            id: '2',
            ruta: 'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-SLIDER.jpg',
            width: 'auto',
            post: 'kotlin-elementos'
        }
    }
]