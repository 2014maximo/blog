import { DatosPost, EstilosPost } from '../models/categorias.model';

export const ESTILO_GIT: EstilosPost = {
    color: 'c-Git',
    colorFondo: 'bg-Git'
}

export const GIT: DatosPost[] = [
    {
        id: '4635803514',
        nombre: 'GIT',
        descripcion: '',
        descripcionCorta: '',
        ruta: 'git',
        componente: 'GitComponent',
        categoria: 'git',
        mostrarEnPostHome: false,
        estilos: ESTILO_GIT,
        fechaCreacion: '2021-05-02',
        fechaActualizacion: '2021-05-02',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-1',
        activo: false
        
    },
    {
        id: '5039735661',
        nombre: 'Git instalación y descripción de las opciones de instalación',
        descripcion: '',
        descripcionCorta: '',
        ruta: 'git-instalacion',
        componente: 'GitInstalacionComponent',
        categoria: 'git',
        mostrarEnPostHome: true,
        estilos: ESTILO_GIT,
        fechaCreacion: '2022-05-05',
        fechaActualizacion: '2022-05-05',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/git/instalar-git.jpg',
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-2',
        activo: true
    },
]