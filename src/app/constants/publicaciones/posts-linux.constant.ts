import { DatosPost, EstilosPost, RefImg } from '@shared/models/categorias.model';

export const ESTILO_LINUX: EstilosPost = {
    color: 'c-Linux',
    colorFondo: 'bg-Linux'
}


export const LINUX: DatosPost[] = [
    {
        id: 'cb344e3e-8b47-4a86-8c26-c7f037ae239a',
        nombre: 'LINUX',
        referenciaBusqueda:'',
        descripcion: [],
        descripcionCorta: '',
        ruta: 'linux',
        componente: 'LinuxComponent',
        categoria: 'linux',
        mostrarEnPostHome: false,
        estilos: ESTILO_LINUX,
        fechaCreacion: '2020-04-04',
        fechaActualizacion: '2020-04-04',
        imgHorizontal: new RefImg(),
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-1',
        estado: 'inactivo'
    },
    {
        id: 'c0d8a7db-934b-48a1-820c-d0d3c53d557c',
        nombre: 'Comandos más usados',
        referenciaBusqueda:'',
        descripcion: [
            'Descripción rápida de la aplicación de lo elementos que hacen parte de typescript, similares en gran parte a Javascript, ya obviamente la aplicación de lo particular de typescript que son los tipos.'
        ],
        descripcionCorta: 'Detalle de los elementos que hacen parte de Typescript, detallando en contraparte a Javascript.',
        ruta: 'lx-co-m-u',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_LINUX,
        fechaCreacion: '2023-09-15',
        fechaActualizacion: '',
        imgHorizontal: new RefImg('https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg'),
        imgVertical:'',
        imgCuadro:'',
        categoria: 'linux',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: undefined
    }
]