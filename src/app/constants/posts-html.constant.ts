import { DatosPost, DatosCategoria } from '../models/categorias.model';
const DATOS_CATEGORIA: DatosCategoria = {
    nombre: 'HTML',
    color: 'c-Html',
    fondo:'',
    path: 'html',
    rutaIcono:'https://plantillas_dev.gitlab.io/assets/img/logos/logo-html.png'
}

export const HTML: DatosPost[] = [
    {
        id: '8825362007',
        titulo: 'HTML',
        descripcion: '',
        descripcionCorta: '',
        path: 'html',
        componente: 'HtmlComponent',
        categoria: DATOS_CATEGORIA,
        mostrarEnPostHome: false,
        estilos: {
            color: ''
        },
        fechaCreacion: '2021-09-09',
        fechaActualizacion: '2021-09-09',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:''
    },
    {
        id: '7222800091',
        titulo: 'Descripción detallada de etiquetas HTML',
        descripcion: 'En algún momento se escucha hablar del lenguaje "HTML", aunque no lo sea, este sistema de estructuras tiene su mundo y unos detalles que no se suelen tener en cuenta mientras escalamos en desarrollo web.',
        descripcionCorta: '',
        path: 'html-etiquetas',
        componente: 'HtmlEtiquetasComponent',
        categoria: DATOS_CATEGORIA,
        mostrarEnPostHome: true,
        estilos: {
            color: ''
        },
        fechaCreacion: '2021-08-09',
        fechaActualizacion: '2021-08-09',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/html/etiquetas-html.jpg',
        imgVertical:'',
        imgCuadro:''
    },
]