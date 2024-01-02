import { DatosPost, EstilosPost, RefImg } from '@shared/models/categorias.model';

export const ESTILO_DEVELOPER: EstilosPost = {
    color: 'c-Developer',
    colorFondo: 'bg-Developer'
}

export const DEVELOPER: DatosPost[] = [
    {
        id: '441cab09-256e-446f-bb2c-f017dd6d217b',
        nombre: 'DEVELOPER.developer.nombre',
        descripcion: ['DEVELOPER.developer.descripcion.tx1'],
        descripcionCorta: 'DEVELOPER.developer.descripcionCorta',
        ruta: 'developer',
        componente: 'DeveloperComponent',
        mostrarEnPostHome: false,
        referenciaBusqueda:'',
        estilos: ESTILO_DEVELOPER,
        fechaCreacion: '2021-08-02',
        fechaActualizacion: '2021-08-02',
        imgHorizontal: new RefImg(),
        imgVertical:'',
        imgCuadro:'',
        categoria: 'developer',
        posicion: 'rot-2',
        estado: 'inactivo'
    },
    {
        id: '6f3b8325-3262-421f-ac5a-7ed4946487a6',
        nombre: 'DEVELOPER.dev-super-recursos.nombre',
        descripcion: ['DEVELOPER.dev-super-recursos.descripcion.tx1'],
        descripcionCorta: 'DEVELOPER.dev-super-recursos.descripcionCorta',
        ruta: 'dev-super-recursos',
        componente: 'DevSuperRecursosComponent',
        mostrarEnPostHome: true,
        referenciaBusqueda:'sitios web - links - web recomendados',
        estilos: ESTILO_DEVELOPER,
        fechaCreacion: '2023-03-20',
        fechaActualizacion: '',
        imgHorizontal: new RefImg('https://plantillas_dev.gitlab.io/assets/img/posts/developer/Una-gran-agrupacion-de-sitios-web-con-muchos-recursos.webp'),
        imgVertical:'',
        imgCuadro:'',
        categoria: 'developer',
        posicion: 'rot-z',
        estado: 'activo',
        imgSlider: {
            alt: 'Agrupación de sitios web recomendados',
            height: '600',
            id: '3',
            ruta: 'https://plantillas_dev.gitlab.io/assets/img/posts/developer/poster/slide-1900x800.jpg',
            width: 'auto',
            post: 'dev-super-recursos'
        }
    },
    {
        id: 'de48822e-c2f5-4274-a682-535a44456478',
        nombre: 'DEVELOPER.dev-algoritmos-clave.nombre',
        referenciaBusqueda:'DEVELOPER.dev-algoritmos-clave.referenciaBusqueda',
        descripcion: ['DEVELOPER.dev-algoritmos-clave.descripcion.tx1'],
        descripcionCorta: 'DEVELOPER.dev-algoritmos-clave.descripcionCorta',
        ruta: 'dev-algoritmos-clave',
        componente: 'DevAlgoritmosClaveComponent',
        mostrarEnPostHome: true,
        estilos: ESTILO_DEVELOPER,
        fechaCreacion: '2023-03-20',
        fechaActualizacion: '',
        imgHorizontal: new RefImg('https://plantillas_dev.gitlab.io/assets/img/posts/developer/algoritmos-clave.jpg'),
        imgVertical:'',
        imgCuadro:'',
        categoria: 'developer',
        posicion: 'rot-1',
        estado: 'activo',
        imgSlider: undefined
    },
    {
        id: 'e36e7879-16ff-4933-84a3-de2bc077b49e',
        nombre: 'DEVELOPER.dev-diagramas-secuencia.nombre',
        referenciaBusqueda:'DEVELOPER.dev-diagramas-secuencia.referenciaBusqueda',
        descripcion: ['DEVELOPER.dev-diagramas-secuencia.descripcion.tx1'],
        descripcionCorta: 'DEVELOPER.dev-diagramas-secuencia.descripcionCorta',
        ruta: 'dev-diagramas-secuencia',
        componente: 'DevDiagramasSecuenciaComponent',
        mostrarEnPostHome: true,
        estilos: ESTILO_DEVELOPER,
        fechaCreacion: '2023-03-20',
        fechaActualizacion: '',
        imgHorizontal: new RefImg('https://plantillas_dev.gitlab.io/assets/img/posts/developer/diagramasecuencia.png','Diagramas de secuencia','auto','220'),
        imgVertical:'',
        imgCuadro:'',
        categoria: 'developer',
        posicion: 'rot-3',
        estado: 'activo',
        imgSlider: undefined
    },
    {
        id: 'aebf78f7-3ffa-4fa0-bde2-ac4cd4d3c07d',
        nombre: 'DEVELOPER.dev-controles-visual.nombre',
        referenciaBusqueda:'DEVELOPER.dev-controles-visual.referenciaBusqueda',
        descripcion: ['DEVELOPER.dev-controles-visual.descripcion.tx1'],
        descripcionCorta: 'DEVELOPER.dev-controles-visual.descripcionCorta',
        ruta: 'dev-controles-visual',
        componente: 'DevControlesVisualStudio',
        mostrarEnPostHome: true,
        estilos: ESTILO_DEVELOPER,
        fechaCreacion: '2023-03-20',
        fechaActualizacion: '',
        imgHorizontal: new RefImg('https://plantillas_dev.gitlab.io/assets/img/posts/developer/controles-rapidos-visual.jpg'),
        imgVertical:'',
        imgCuadro:'',
        categoria: 'developer',
        posicion: 'rot-3',
        estado: 'activo',
        imgSlider: undefined
    },
    {
        id: '27df71a4-6654-4349-9481-06f93c3639d6',
        nombre: 'DEVELOPER.dev-busqueda-empleo.nombre',
        referenciaBusqueda:'DEVELOPER.dev-busqueda-empleo.referenciaBusqueda',
        descripcion: [
            'DEVELOPER.dev-busqueda-empleo.descripcion.tx1',
            'DEVELOPER.dev-busqueda-empleo.descripcion.tx2',
            'DEVELOPER.dev-busqueda-empleo.descripcion.tx3'
        ],
        descripcionCorta: 'DEVELOPER.dev-busqueda-empleo.descripcionCorta',
        ruta: 'dev-busqueda-empleo',
        componente: 'DevBusquedaEmpleoComponent',
        mostrarEnPostHome: true,
        estilos: ESTILO_DEVELOPER,
        fechaCreacion: '2023-09-18',
        fechaActualizacion: '2023-11-29',
        imgHorizontal: new RefImg('https://plantillas_dev.gitlab.io/assets/img/posts/developer/busqueda-empleo.jpeg'),
        imgVertical:'',
        imgCuadro:'',
        categoria: 'developer',
        posicion: 'rot-3',
        estado: 'activo',
        imgSlider: undefined
    },
    {
        id: 'bec3c210-7438-4082-ab68-ff836b42b3eb',
        nombre: 'DEVELOPER.dev-glosario.nombre',
        referenciaBusqueda:'DEVELOPER.dev-glosario.referenciaBusqueda',
        descripcion: [
            'DEVELOPER.dev-glosario.descripcion.tx1'
        ],
        descripcionCorta: 'DEVELOPER.dev-glosario.descripcionCorta',
        ruta: 'dev-glosario-general',
        componente: 'DevControlesVisualStudio',
        mostrarEnPostHome: true,
        estilos: ESTILO_DEVELOPER,
        fechaCreacion: '2023-09-18',
        fechaActualizacion: '',
        imgHorizontal: new RefImg('https://plantillas_dev.gitlab.io/assets/img/posts/developer/glosario-general.png','Glosario general','auto','220'),
        imgVertical:'',
        imgCuadro:'',
        categoria: 'developer',
        posicion: 'rot-3',
        estado: 'activo',
        imgSlider: undefined
    },
]