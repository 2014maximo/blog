import { DatosPost, EstilosPost } from '../../models/categorias.model';

export const ESTILO_DEVELOPER: EstilosPost = {
    color: 'c-Developer',
    colorFondo: 'bg-Developer'
}

export const DEVELOPER: DatosPost[] = [
    {
        id: '441cab09-256e-446f-bb2c-f017dd6d217b',
        nombre: 'Developer',
        descripcion: [],
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
        estado: 'inactivo'
    },
    {
        id: '6f3b8325-3262-421f-ac5a-7ed4946487a6',
        nombre: 'Una gran agrupación de sitios web con muchos recursos',
        descripcion: ['No sabemos que existen ciertos sitios web hasta que alguien nos cuenta lo increíble que son y llegamos a ellos. Esta vez están a la mano un recopilación de unos sitios web recomendados totalmente.'],
        descripcionCorta: 'Sitios web que se ignora para que puedan ser útiles. Una pequeña descripción.',
        ruta: 'dev-super-recursos',
        componente: 'DevSuperRecursosComponent',
        mostrarEnPostHome: true,
        estilos: ESTILO_DEVELOPER,
        fechaCreacion: '2023-03-20',
        fechaActualizacion: '',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/developer/Una gran agrupación de sitios web con muchos recursos.jpg',
        imgVertical:'',
        imgCuadro:'',
        categoria: 'developer',
        posicion: 'rot-z',
        estado: 'activo'
    },
    {
        id: 'a6035e44-38f3-485e-903d-c76452cec9b3',
        nombre: 'Principios Solid',
        descripcion: ['El camino ninja del desarrollado, siendo el objetivo hacer cositas bien hechas.'],
        descripcionCorta: '',
        ruta: 'dev-principios-solid',
        componente: 'PrincipiosSolidComponent',
        mostrarEnPostHome: false,
        estilos: ESTILO_DEVELOPER,
        fechaCreacion: '2023-03-20',
        fechaActualizacion: '',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/developer/Una gran agrupación de sitios web con muchos recursos.jpg',
        imgVertical:'',
        imgCuadro:'',
        categoria: 'developer',
        posicion: 'rot-1',
        estado: 'inactivo'
    },
]