import { DatosPost, EstilosPost, RefImg } from '@shared/models/categorias.model';

export const ESTILO_PHP: EstilosPost = {
    color: 'c-Php',
    colorFondo: 'bg-Php'
}


export const PHP: DatosPost[] = [
    {
        id: 'b7cfec07-e492-400f-9238-f6cf3daba5e9',
        nombre: 'PHP',
        descripcion: [],
        descripcionCorta: '',
        ruta: 'php',
        componente: 'PhpComponent',
        categoria: 'php',
        mostrarEnPostHome: false,
        estilos: ESTILO_PHP,
        fechaCreacion: '2020-09-15',
        fechaActualizacion: '',
        imgHorizontal: new RefImg(),
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-1',
        estado: 'inactivo'
    },
    {
        id: '0bac147d-348c-48c4-976a-b1c83e4a0237',
        nombre: 'Elementos Php',
        descripcion: [
            'Descripción rápida de la aplicación de lo elementos que hacen parte de typescript, similares en gran parte a Javascript, ya obviamente la aplicación de lo particular de typescript que son los tipos.'
        ],
        descripcionCorta: 'Detalle de los elementos que hacen parte de Typescript, detallando en contraparte a Javascript.',
        ruta: 'php-elementos',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_PHP,
        fechaCreacion: '2023-09-15',
        fechaActualizacion: '',
        imgHorizontal: new RefImg('https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg'),
        imgVertical:'',
        imgCuadro:'',
        categoria: 'php',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: undefined
    }
]