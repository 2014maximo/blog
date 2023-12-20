import { DatosPost, EstilosPost, RefImg } from "@shared/models/categorias.model"

export const ESTILO_DB: EstilosPost = {
    color: 'c-Db',
    colorFondo: 'bg-Db'
}

export const DB: DatosPost[] = [
    {
        id: '6569240889',
        nombre: 'DB',
        referenciaBusqueda:'',
        descripcion: [],
        descripcionCorta: '',
        ruta: 'db',
        componente: 'DbComponent',
        categoria: 'db',
        mostrarEnPostHome: false,
        estilos: ESTILO_DB,
        fechaCreacion: '2021-01-05',
        fechaActualizacion: '2021-01-05',
        imgHorizontal: new RefImg(),
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-2',
        estado: 'inactivo'
    },
    {
        id: 'e0d1b708-45bc-4749-a648-3c41d14ab7cc',
        nombre: 'Firebase',
        referenciaBusqueda:'',
        descripcion: [
            'Firebase es una super herramienta en desarrollo para ser el núcleo de información, adaptable en nuestros inicios como desarrolladores.'
        ],
        descripcionCorta: 'Esta es una guía de elementos que debes gestionar para conectar tu aplicación a Firebase.',
        ruta: 'db-firebase',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_DB,
        fechaCreacion: '2023-09-14',
        fechaActualizacion: '',
        imgHorizontal: new RefImg('https://plantillas_dev.gitlab.io/assets/img/posts/db/firebase.png','Logo Firebase','auto','220'),
        imgVertical:'',
        imgCuadro:'',
        categoria: 'db',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: undefined
    },
    {
        id: '52afbc12-1bbc-4225-848d-faab850761dc',
        nombre: 'SQL',
        referenciaBusqueda:'',
        descripcion: [
            'Firebase es una super herramienta en desarrollo para ser el núcleo de información, adaptable en nuestros inicios como desarrolladores.'
        ],
        descripcionCorta: 'Esta es una guía de elementos que debes gestionar para conectar tu aplicación a Firebase.',
        ruta: 'db-sql',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_DB,
        fechaCreacion: '2023-09-14',
        fechaActualizacion: '',
        imgHorizontal: new RefImg('https://plantillas_dev.gitlab.io/assets/img/posts/db/sql.jpg'),
        imgVertical:'',
        imgCuadro:'',
        categoria: 'db',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: undefined
    },
    {
        id: 'c20a999c-d149-42fa-95fa-d4a2b7371bb4',
        nombre: 'SQL Server',
        referenciaBusqueda:'',
        descripcion: [
            'Firebase es una super herramienta en desarrollo para ser el núcleo de información, adaptable en nuestros inicios como desarrolladores.'
        ],
        descripcionCorta: 'Esta es una guía de elementos que debes gestionar para conectar tu aplicación a Firebase.',
        ruta: 'db-sql-server',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_DB,
        fechaCreacion: '2023-09-14',
        fechaActualizacion: '',
        imgHorizontal: new RefImg('https://plantillas_dev.gitlab.io/assets/img/posts/db/sql-server.jpg'),
        imgVertical:'',
        imgCuadro:'',
        categoria: 'db',
        posicion: 'rot-1',
        estado: 'activo',
        imgSlider: undefined
    },
]