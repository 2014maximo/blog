import { DatosCategoria, DatosPost } from '../models/categorias.model';


const DATOS_CATEGORIA: DatosCategoria = {
    nombre: 'DEVELOPER',
    color: 'c-Developer',
    fondo:'',
    ruta: 'developer',
    rutaIcono:'assets/img/categorias/icon-developer.png'
}

export const DEVELOPER: DatosPost[] = [
    {
        id: '3583661544',
        titulo: 'Developer',
        descripcion: '',
        descripcionCorta: '',
        ruta: 'developer',
        componente: 'DeveloperComponent',
        mostrarEnPostHome: false,
        estilos: {
            color: ''
        },
        fechaCreacion: '2021-08-02',
        fechaActualizacion: '2021-08-02',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:'',
        categoria: DATOS_CATEGORIA
    },
    {
        id: '7084156673',
        titulo: 'Una gran agrupación de sitios web con muchos recursos',
        descripcion: 'No sabemos que existen ciertos sitios web hasta que alguien nos cuenta lo increíble que son y llegamos a ellos. Esta vez están a la mano un recopilación de unos sitios web recomendados totalmente.',
        descripcionCorta: '',
        ruta: 'dev-super-recursos',
        componente: 'DevSuperRecursosComponent',
        mostrarEnPostHome: true,
        estilos: {
            color: ''
        },
        fechaCreacion: '2022-05-08',
        fechaActualizacion: '2022-05-08',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/developer/Una gran agrupación de sitios web con muchos recursos.jpg',
        imgVertical:'',
        imgCuadro:'',
        categoria: DATOS_CATEGORIA
    }
]