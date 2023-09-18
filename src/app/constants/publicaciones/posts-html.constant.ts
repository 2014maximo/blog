import { DatosPost, EstilosPost } from '../../shared/models/categorias.model';

export const ESTILO_HTML: EstilosPost = {
    color: 'c-Html',
    colorFondo: 'bg-Html'
}


export const HTML: DatosPost[] = [
    {
        id: '8825362007',
        nombre: 'HTML',
        descripcion: [],
        descripcionCorta: '',
        ruta: 'html',
        componente: 'HtmlComponent',
        categoria: 'html',
        mostrarEnPostHome: false,
        estilos: ESTILO_HTML,
        fechaCreacion: '2021-09-09',
        fechaActualizacion: '2021-09-09',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-1',
        estado: 'inactivo'
    },
    {
        id: '2b9d0c67-2262-4f96-8179-483d21f71967',
        nombre: 'Elementos HTML',
        descripcion: [
            'Descripción rápida de la aplicación de lo elementos que hacen parte de typescript, similares en gran parte a Javascript, ya obviamente la aplicación de lo particular de typescript que son los tipos.'
        ],
        descripcionCorta: 'Detalle de los elementos que hacen parte de Typescript, detallando en contraparte a Javascript.',
        ruta: 'html-etiquetas',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_HTML,
        fechaCreacion: '2023-09-14',
        fechaActualizacion: '',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg',
        imgVertical:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        imgCuadro:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        categoria: 'html',
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