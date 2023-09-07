import { DatosPost, EstilosPost } from '../../shared/models/categorias.model';

export const ESTILO_TYPESCRIPT: EstilosPost = {
    color: 'c-Typescript',
    colorFondo: 'bg-Typescript'
}


export const TYPESCRIPT: DatosPost[] = [
    {
        id: '3574124706',
        nombre: 'TYPESCRIPT',
        descripcion: [],
        descripcionCorta: '',
        ruta: 'typescript',
        componente: 'TypescriptComponent',
        categoria: 'typescript',
        mostrarEnPostHome: false,
        estilos: ESTILO_TYPESCRIPT,
        fechaCreacion: '2023-09-06',
        fechaActualizacion: '',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-1',
        estado: 'inactivo'
    },
    {
        id: 'c79624d0-b839-465a-9879-461267c01f6b',
        nombre: 'Elementos typescript',
        descripcion: ['Para empezar esta la instalación de angular simplemente, se puede tener en cuenta que trae de especial cada versión, obviamente la última versión nos muestra hasta donde a evolucionado el Framework. También estan los comandos de inicio, de creación y las opciones, que cuando empezamos no los tenemos a la mano.'],
        descripcionCorta: 'Instalación angular. Qué traen las versiones desde la js y todos los comandos del angular que desconocías.',
        ruta: 'ts-elementos',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_TYPESCRIPT,
        fechaCreacion: '2023-09-06',
        fechaActualizacion: '',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg',
        imgVertical:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        imgCuadro:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        categoria: 'typescript',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: {
            alt: 'Instalación Angular y recomendados',
            height: '600',
            id: '2',
            ruta: 'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-SLIDER.jpg',
            width: 'auto',
            post: 'ng-instalacion'
        }
    }
]
