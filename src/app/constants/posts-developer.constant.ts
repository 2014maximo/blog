import { DatosPost, EstilosPost } from '../models/categorias.model';

export const ESTILO_DEVELOPER: EstilosPost = {
    color: 'c-Developer',
    colorFondo: 'bg-Developer'
}

export const DEVELOPER: DatosPost[] = [
    {
        id: '3583661544',
        nombre: 'Developer',
        descripcion: '',
        descripcionCorta: '',
        ruta: 'developer',
        componente: 'DeveloperComponent',
        mostrarEnPostHome: false,
        estilos: ESTILO_DEVELOPER,
        fechaCreacion: '2021-08-02',
        fechaActualizacion: '2021-08-02',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:'',
        categoria: 'developer',
        posicion: 'rot-2',
        activo: false
    },
    {
        id: '7084156673',
        nombre: 'Una gran agrupación de sitios web con muchos recursos',
        descripcion: 'No sabemos que existen ciertos sitios web hasta que alguien nos cuenta lo increíble que son y llegamos a ellos. Esta vez están a la mano un recopilación de unos sitios web recomendados totalmente.',
        descripcionCorta: '',
        ruta: 'dev-super-recursos',
        componente: 'DevSuperRecursosComponent',
        mostrarEnPostHome: true,
        estilos: ESTILO_DEVELOPER,
        fechaCreacion: '2022-05-08',
        fechaActualizacion: '2022-05-08',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/developer/Una gran agrupación de sitios web con muchos recursos.jpg',
        imgVertical:'',
        imgCuadro:'',
        categoria: 'developer',
        posicion: 'rot-z',
        activo: true
    }
]