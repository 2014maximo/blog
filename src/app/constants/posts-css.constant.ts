import { DatosPost, EstilosPost } from '../models/categorias.model';

export const ESTILO_CSS: EstilosPost = {
    color: 'c-Css',
    colorFondo: 'bg-Css'
}

export const CSS: DatosPost[] = [
    {
        id: '2234145591',
        nombre: 'CSS',
        descripcion: 'Cuando empezamos a desarrollar en web solo con HTML, sentimos nos hace falta poder mostrar cada elemento con otro color o con un mejor estilo',
        descripcionCorta: '',
        ruta: 'css',
        componente: 'CssComponent',
        categoria: 'css',
        mostrarEnPostHome: false,
        estilos: ESTILO_CSS,
        fechaCreacion: '2021-01-01',
        fechaActualizacion: '2021-01-01',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-2',
        activo: false
    },
    {
        id: '5600292414',
        nombre: 'Agrupación de las clases más usadas bootstrap v4.6',
        descripcion: 'Consigue en un documento descargable, las clases que se suelen utilizar más amenudo en la maquetación con bootstrap 4.6',
        descripcionCorta: '',
        ruta: 'css-bootstrap4-clases',
        componente: 'CssBootstrap4clasesComponent',
        categoria: 'css',
        mostrarEnPostHome: true,
        estilos: ESTILO_CSS,
        fechaCreacion: '2021-02-01',
        fechaActualizacion: '2021-02-01',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/css/clases bootstrap4.png',
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-1',
        activo: true
    }
]