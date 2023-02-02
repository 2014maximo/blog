import { DatosPost, DatosCategoria } from '../models/categorias.model';
const DATOS_CATEGORIA: DatosCategoria = {
    nombre: 'CSS',
    color: 'c-Css',
    fondo:'',
    path: 'css',
    rutaIcono:'https://plantillas_dev.gitlab.io/assets/img/logos/logo-css.png'
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
        fechaCreacion: '2021-01-01',
        fechaActualizacion: '2021-01-01',
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
        fechaCreacion: '2021-02-01',
        fechaActualizacion: '2021-02-01',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/css/clases bootstrap4.png',
        imgVertical:'',
        imgCuadro:''
    }
]