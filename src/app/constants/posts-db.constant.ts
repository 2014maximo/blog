import { DatosPost, DatosCategoria } from '../models/categorias.model';
const DATOS_CATEGORIA: DatosCategoria = {
    nombre: 'DB',
    color: 'c-Sql',
    fondo:'',
    path: 'db',
    rutaIcono:'https://plantillas_dev.gitlab.io/assets/img/logos/logo-db.png'
}

export const DB: DatosPost[] = [
    {
        id: '6569240889',
        titulo: 'DB',
        descripcion: '',
        descripcionCorta: '',
        path: 'db',
        componente: 'DbComponent',
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
        id: '2580732202',
        titulo: 'Firebase',
        descripcion: '',
        descripcionCorta: '',
        path: 'db-firebase',
        componente: 'DbFirebaseComponent',
        categoria: DATOS_CATEGORIA,
        mostrarEnPostHome: true,
        estilos: {
            color: ''
        },
        fechaCreacion: '01-01-2021',
        fechaActualizacion: '',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/db/firebase.jpg',
        imgVertical:'',
        imgCuadro:''
    },
    {
        id: '6999601172',
        titulo: 'SQL',
        descripcion: '',
        descripcionCorta: '',
        path: 'db-sql',
        componente: 'DbSqlComponent',
        categoria: DATOS_CATEGORIA,
        mostrarEnPostHome: true,
        estilos: {
            color: ''
        },
        fechaCreacion: '01-01-2021',
        fechaActualizacion: '',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/db/sql.jpg',
        imgVertical:'',
        imgCuadro:''
    },
    {
        id: '6999601172',
        titulo: 'SQL-Server',
        descripcion: '',
        descripcionCorta: '',
        path: 'db-sql',
        componente: 'DbSqlComponent',
        categoria: DATOS_CATEGORIA,
        mostrarEnPostHome: true,
        estilos: {
            color: ''
        },
        fechaCreacion: '01-01-2021',
        fechaActualizacion: '',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/db/sql-server.jpg',
        imgVertical:'',
        imgCuadro:''
    }
]