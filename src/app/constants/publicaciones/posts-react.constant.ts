import { DatosPost, EstilosPost } from '@shared/models/categorias.model';

export const ESTILO_REACT: EstilosPost = {
    color: 'c-React',
    colorFondo: 'bg-React'
}


export const REACT: DatosPost[] = [
    {
        id: '62a96ee3-75c7-4b01-aba7-d963ffd140bb',
        nombre: 'React',
        descripcion: [],
        descripcionCorta: '',
        ruta: 'react',
        componente: 'ReactComponent',
        categoria: 'react',
        mostrarEnPostHome: false,
        estilos: ESTILO_REACT,
        fechaCreacion: '2020-09-15',
        fechaActualizacion: '',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-1',
        estado: 'inactivo'
    },
    {
        id: 'ed1ead34-09ca-4de2-b43d-ecf6f60a9e39',
        nombre: 'Elementos React',
        descripcion: [
            'Descripción rápida de la aplicación de lo elementos que hacen parte de typescript, similares en gran parte a Javascript, ya obviamente la aplicación de lo particular de typescript que son los tipos.'
        ],
        descripcionCorta: 'Detalle de los elementos que hacen parte de Typescript, detallando en contraparte a Javascript.',
        ruta: 'react-elementos',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_REACT,
        fechaCreacion: '2023-09-15',
        fechaActualizacion: '',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg',
        imgVertical:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        imgCuadro:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        categoria: 'react',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: {
            alt: 'Elementos React',
            height: '600',
            id: '2',
            ruta: 'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-SLIDER.jpg',
            width: 'auto',
            post: 'react-elementos'
        }
    }
]