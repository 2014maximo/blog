import { DatosPost, EstilosPost } from "@shared/models/categorias.model"

export const ESTILO_DB: EstilosPost = {
    color: 'c-Db',
    colorFondo: 'bg-Db'
}

export const DB: DatosPost[] = [
    {
        id: '6569240889',
        nombre: 'DB',
        descripcion: [],
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
        id: 'e0d1b708-45bc-4749-a648-3c41d14ab7cc',
        nombre: 'Firebase',
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
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg',
        imgVertical:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        imgCuadro:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        categoria: 'db',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: {
            alt: 'Firebase',
            height: '600',
            id: '2',
            ruta: 'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-SLIDER.jpg',
            width: 'auto',
            post: 'db-firebase'
        }
    },
    {
        id: '52afbc12-1bbc-4225-848d-faab850761dc',
        nombre: 'SQL',
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
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg',
        imgVertical:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        imgCuadro:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        categoria: 'db',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: {
            alt: 'SQL',
            height: '600',
            id: '2',
            ruta: 'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-SLIDER.jpg',
            width: 'auto',
            post: 'db-sql'
        }
    },
    {
        id: 'c20a999c-d149-42fa-95fa-d4a2b7371bb4',
        nombre: 'SQL Server',
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
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg',
        imgVertical:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        imgCuadro:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        categoria: 'db',
        posicion: 'rot-1',
        estado: 'activo',
        imgSlider: {
            alt: 'SQL Server',
            height: '600',
            id: '2',
            ruta: 'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-SLIDER.jpg',
            width: 'auto',
            post: 'db-sql-server'
        }
    },
]