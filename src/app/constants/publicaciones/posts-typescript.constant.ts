import { DatosPost, EstilosPost, RefImg } from "@shared/models/categorias.model"


export const ESTILO_TYPESCRIPT: EstilosPost = {
    color: 'c-Typescript',
    colorFondo: 'bg-Typescript'
}


export const TYPESCRIPT: DatosPost[] = [
    {
        id: '3574124706',
        nombre: 'TYPESCRIPT.typescript.nombre',
        referenciaBusqueda:'TYPESCRIPT.typescript.referenciaBusqueda',
        descripcion: ['TYPESCRIPT.typescript.descripcion.tx1'],
        descripcionCorta: 'TYPESCRIPT.typescript.descripcionCorta',
        ruta: 'typescript',
        componente: 'TypescriptComponent',
        categoria: 'typescript',
        mostrarEnPostHome: false,
        estilos: ESTILO_TYPESCRIPT,
        fechaCreacion: '2023-09-06',
        fechaActualizacion: '',
        imgHorizontal: new RefImg(),
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-1',
        estado: 'inactivo'
    },
    {
        id: 'c79624d0-b839-465a-9879-461267c01f6b',
        nombre: 'TYPESCRIPT.typescript-elementos.nombre',
        referenciaBusqueda:'TYPESCRIPT.typescript-elementos.referenciaBusqueda',
        descripcion: [
            'TYPESCRIPT.typescript-elementos.descripcion.tx1'
        ],
        descripcionCorta: 'TYPESCRIPT.typescript-elementos.descripcionCorta',
        ruta: 'ts-elementos',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_TYPESCRIPT,
        fechaCreacion: '2023-09-06',
        fechaActualizacion: '',
        imgHorizontal: new RefImg('https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg'),
        imgVertical:'',
        imgCuadro:'',
        categoria: 'typescript',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: undefined
    }
]
