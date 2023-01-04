import { DatosPost, DatosCategoria } from '../models/categorias.model';
const DATOS_CATEGORIA: DatosCategoria = {
    nombre: 'CSS',
    color: 'c-Css',
    fondo:'',
    path: 'css',
    rutaIcono:'assets/img/categorias/css.png'
}

export const CSS: DatosPost[] = [
    {
        id: '2234145591',
        titulo: 'CSS',
        descripcion: 'Cuando empezamos a desarrollar en web solo con HTML, sentimos nos hace falta poder mostrar cada elemento con otro color o con un mejor estilo',
        descripcionCorta: '',
        path: 'css',
        componente: 'CssComponent',
        categoria: DATOS_CATEGORIA,
        mostrarEnPostHome: false,
        estilos: {
            color: ''
        },
        fechaCreacion: '01-01-2021',
        fechaActualizacion: '',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:''
    },
    {
        id: '5600292414',
        titulo: 'Agrupación de las clases más usadas bootstrap v4.6',
        descripcion: 'Consigue en un documento descargable, las clases que se suelen utilizar más amenudo en la maquetación con bootstrap 4.6',
        descripcionCorta: '',
        path: 'css-bootstrap4-clases',
        componente: 'CssBootstrap4clasesComponent',
        categoria: DATOS_CATEGORIA,
        mostrarEnPostHome: true,
        estilos: {
            color: ''
        },
        fechaCreacion: '01-02-2021',
        fechaActualizacion: '',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/css/clases bootstrap4.png',
        imgVertical:'',
        imgCuadro:''
    }
]