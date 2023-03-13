import { DatosPost, EstilosPost } from '../models/categorias.model';

export const ESTILO_DB: EstilosPost = {
    color: 'c-Db',
    colorFondo: 'bg-Db'
}

export const DB: DatosPost[] = [
    {
        id: '6569240889',
        nombre: 'DB',
        descripcion: '',
        descripcionCorta: '',
        ruta: 'db',
        componente: 'DbComponent',
        categoria: 'db',
        mostrarEnPostHome: false,
        estilos: ESTILO_DB,
        fechaCreacion: '2021-01-05',
        fechaActualizacion: '2021-01-05',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-2',
        estado: 'inactivo'
    },
    {
        id: '2580732202',
        nombre: 'Firebase',
        descripcion: '',
        descripcionCorta: '',
        ruta: 'db-firebase',
        componente: 'DbFirebaseComponent',
        categoria: 'db',
        mostrarEnPostHome: true,
        estilos: ESTILO_DB,
        fechaCreacion: '2021-03-03',
        fechaActualizacion: '2021-03-03',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/db/firebase.jpg',
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-z',
        estado: 'activo'
    },
    {
        id: '6999601172',
        nombre: 'SQL',
        descripcion: '',
        descripcionCorta: '',
        ruta: 'db-sql',
        componente: 'DbSqlComponent',
        categoria: 'db',
        mostrarEnPostHome: true,
        estilos: ESTILO_DB,
        fechaCreacion: '2021-02-07',
        fechaActualizacion: '2021-02-07',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/db/sql.jpg',
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-z',
        estado: 'activo'
    },
    {
        id: '6999601172',
        nombre: 'SQL-Server',
        descripcion: '',
        descripcionCorta: '',
        ruta: 'db-sql',
        componente: 'DbSqlComponent',
        categoria: 'db',
        mostrarEnPostHome: true,
        estilos: ESTILO_DB,
        fechaCreacion: '2022-07-08',
        fechaActualizacion: '2022-07-08',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/db/sql-server.jpg',
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-1',
        estado: 'activo'
    }
]