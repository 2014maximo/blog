import { DatosPost, EstilosPost, RefImg } from '@shared/models/categorias.model';

export const ESTILO_DEVELOPER: EstilosPost = {
    color: 'c-Developer',
    colorFondo: 'bg-Developer'
}

export const DEVELOPER: DatosPost[] = [
    {
        id: '441cab09-256e-446f-bb2c-f017dd6d217b',
        nombre: 'Developer',
        descripcion: [''],
        descripcionCorta: '',
        ruta: 'developer',
        componente: 'DeveloperComponent',
        mostrarEnPostHome: false,
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
        nombre: 'Una gran agrupación de sitios web con muchos recursos',
        descripcion: ['No sabemos que existen ciertos sitios web hasta que alguien nos cuenta lo increíble que son y llegamos a ellos. Esta vez están a la mano un recopilación de unos sitios web recomendados totalmente.'],
        descripcionCorta: 'Sitios web que se ignora para que puedan ser útiles. Una pequeña descripción.',
        ruta: 'dev-super-recursos',
        componente: 'DevSuperRecursosComponent',
        mostrarEnPostHome: true,
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
        nombre: 'Algoritmos de clasificación que son clave',
        descripcion: ['No sabemos que existen ciertos sitios web hasta que alguien nos cuenta lo increíble que son y llegamos a ellos. Esta vez están a la mano un recopilación de unos sitios web recomendados totalmente.'],
        descripcionCorta: 'Sitios web que se ignora para que puedan ser útiles. Una pequeña descripción.',
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
        nombre: 'Diagramas de secuencia',
        descripcion: ['No sabemos que existen ciertos sitios web hasta que alguien nos cuenta lo increíble que son y llegamos a ellos. Esta vez están a la mano un recopilación de unos sitios web recomendados totalmente.'],
        descripcionCorta: 'Sitios web que se ignora para que puedan ser útiles. Una pequeña descripción.',
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
        nombre: 'Controles rápidos visual studio code',
        descripcion: ['No sabemos que existen ciertos sitios web hasta que alguien nos cuenta lo increíble que son y llegamos a ellos. Esta vez están a la mano un recopilación de unos sitios web recomendados totalmente.'],
        descripcionCorta: 'Sitios web que se ignora para que puedan ser útiles. Una pequeña descripción.',
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
        nombre: 'DEV.be.titulo',
        descripcion: [
            'DEV.be.descripcion.tx1',
            'DEV.be.descripcion.tx2',
            'DEV.be.descripcion.tx3'
        ],
        descripcionCorta: 'Recomendaciones probadas de búsqueda laboral.',
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
        nombre: 'Glosario general',
        descripcion: [
            'Terminos en general en la programación, este glosario a medida reciba actualizaciones se ingresan más términos y su significado.'
        ],
        descripcionCorta: 'Recomendaciones probadas en mi propia experiencia de búsqueda laboral.',
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