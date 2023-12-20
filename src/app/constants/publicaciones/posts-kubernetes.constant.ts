import { DatosPost, EstilosPost, RefImg } from '@shared/models/categorias.model';

export const ESTILO_KUBERNETES: EstilosPost = {
    color: 'c-Kubernetes',
    colorFondo: 'bg-Kubernetes'
}


export const KUBERNETES: DatosPost[] = [
    {
        id: 'b4b3eae9-5f63-4d8e-851b-57bb6982a919',
        nombre: 'KOTLIN',
        referenciaBusqueda:'',
        descripcion: [],
        descripcionCorta: '',
        ruta: 'kotlin',
        componente: 'KotlinComponent',
        categoria: 'kotlin',
        mostrarEnPostHome: false,
        estilos: ESTILO_KUBERNETES,
        fechaCreacion: '2020-09-15',
        fechaActualizacion: '',
        imgHorizontal: new RefImg(),
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-1',
        estado: 'inactivo'
    },
    {
        id: 'f69f7a4b-7bd3-4adb-a4f4-1e0c4d997e5a',
        nombre: 'Elementos kubernetes',
        referenciaBusqueda:'',
        descripcion: [
            'Descripción rápida de la aplicación de lo elementos que hacen parte de typescript, similares en gran parte a Javascript, ya obviamente la aplicación de lo particular de typescript que son los tipos.'
        ],
        descripcionCorta: 'Detalle de los elementos que hacen parte de Typescript, detallando en contraparte a Javascript.',
        ruta: 'kotlin-elementos',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_KUBERNETES,
        fechaCreacion: '2023-09-15',
        fechaActualizacion: '',
        imgHorizontal: new RefImg('https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg'),
        imgVertical:'',
        imgCuadro:'',
        categoria: 'kotlin',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: undefined
    }
]