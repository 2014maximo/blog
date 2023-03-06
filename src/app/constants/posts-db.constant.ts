import { DatosPost, DatosCategoria } from '../models/categorias.model';
const DATOS_CATEGORIA: DatosCategoria = {
    nombre: 'DB',
    color: 'c-Sql',
    fondo:'',
    ruta: 'db',
    rutaIcono:'https://plantillas_dev.gitlab.io/assets/img/logos/logo-db.png'
}

export const DB: DatosPost[] = [
    {
        id: '6569240889',
        titulo: 'DB',
        descripcion: '',
        descripcionCorta: '',
        ruta: 'db',
        componente: 'DbComponent',
        categoria: DATOS_CATEGORIA,
        mostrarEnPostHome: false,
        estilos: {
            color: ''
        },
        fechaCreacion: '2021-01-05',
        fechaActualizacion: '2021-01-05',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:''
    },
    {
        id: '2580732202',
        titulo: 'Firebase',
        descripcion: '',
        descripcionCorta: '',
        ruta: 'db-firebase',
        componente: 'DbFirebaseComponent',
        categoria: DATOS_CATEGORIA,
        mostrarEnPostHome: true,
        estilos: {
            color: ''
        },
        fechaCreacion: '2021-03-03',
        fechaActualizacion: '2021-03-03',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/db/firebase.jpg',
        imgVertical:'',
        imgCuadro:''
    },
    {
        id: '6999601172',
        titulo: 'SQL',
        descripcion: '',
        descripcionCorta: '',
        ruta: 'db-sql',
        componente: 'DbSqlComponent',
        categoria: DATOS_CATEGORIA,
        mostrarEnPostHome: true,
        estilos: {
            color: ''
        },
        fechaCreacion: '2021-02-07',
        fechaActualizacion: '2021-02-07',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/db/sql.jpg',
        imgVertical:'',
        imgCuadro:''
    },
    {
        id: '6999601172',
        titulo: 'SQL-Server',
        descripcion: '',
        descripcionCorta: '',
        ruta: 'db-sql',
        componente: 'DbSqlComponent',
        categoria: DATOS_CATEGORIA,
        mostrarEnPostHome: true,
        estilos: {
            color: ''
        },
        fechaCreacion: '2022-07-08',
        fechaActualizacion: '2022-07-08',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/db/sql-server.jpg',
        imgVertical:'',
        imgCuadro:''
    }
]