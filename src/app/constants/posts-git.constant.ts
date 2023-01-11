import { DatosPost, DatosCategoria } from '../models/categorias.model';
const DATOS_CATEGORIA: DatosCategoria = {
    nombre: 'GIT',
    color: 'c-Git',
    fondo:'',
    path: 'git',
    rutaIcono:'https://plantillas_dev.gitlab.io/assets/img/logos/logo-git.png'
}

export const GIT: DatosPost[] = [
    {
        id: '4635803514',
        titulo: 'GIT',
        descripcion: '',
        descripcionCorta: '',
        path: 'git',
        componente: 'GitComponent',
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
        id: '5039735661',
        titulo: 'Git instalación y descripción de las opciones de instalación',
        descripcion: '',
        descripcionCorta: '',
        path: 'git-instalacion',
        componente: 'GitInstalacionComponent',
        categoria: DATOS_CATEGORIA,
        mostrarEnPostHome: true,
        estilos: {
            color: ''
        },
        fechaCreacion: '01-01-2021',
        fechaActualizacion: '',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/git/instalar-git.jpg',
        imgVertical:'',
        imgCuadro:''
    },
]