import { DatosPost, EstilosPost } from '../models/categorias.model';

export const ESTILO_HTML: EstilosPost = {
    color: 'c-Html',
    colorFondo: 'bg-Html'
}


export const HTML: DatosPost[] = [
    {
        id: '8825362007',
        nombre: 'HTML',
        descripcion: '',
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
        activo: false
    },
    {
        id: '7222800091',
        nombre: 'Descripción detallada de etiquetas HTML',
        descripcion: 'En algún momento se escucha hablar del lenguaje "HTML", aunque no lo sea, este sistema de estructuras tiene su mundo y unos detalles que no se suelen tener en cuenta mientras escalamos en desarrollo web.',
        descripcionCorta: '',
        ruta: 'html-etiquetas',
        componente: 'HtmlEtiquetasComponent',
        categoria: 'html',
        mostrarEnPostHome: true,
        estilos: ESTILO_HTML,
        fechaCreacion: '2021-08-09',
        fechaActualizacion: '2021-08-09',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/html/etiquetas-html.jpg',
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-2',
        activo: true
    },
]