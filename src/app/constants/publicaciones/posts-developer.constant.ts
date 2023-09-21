import { DatosPost, EstilosPost } from '../../shared/models/categorias.model';

export const ESTILO_DEVELOPER: EstilosPost = {
    color: 'c-Developer',
    colorFondo: 'bg-Developer'
}

export const DEVELOPER: DatosPost[] = [
    {
        id: '441cab09-256e-446f-bb2c-f017dd6d217b',
        nombre: 'Developer',
        descripcion: ['No sabemos que existen ciertos sitios web hasta que alguien nos cuenta lo increíble que son y llegamos a ellos. Esta vez están a la mano un recopilación de unos sitios web recomendados totalmente.'],
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
        nombre: 'Algoritmos de clasificación clave',
        descripcion: ['No sabemos que existen ciertos sitios web hasta que alguien nos cuenta lo increíble que son y llegamos a ellos. Esta vez están a la mano un recopilación de unos sitios web recomendados totalmente.'],
        descripcionCorta: 'Sitios web que se ignora para que puedan ser útiles. Una pequeña descripción.',
        ruta: 'dev-algoritmos-clave',
        componente: 'DevAlgoritmosClaveComponent',
        mostrarEnPostHome: true,
        estilos: ESTILO_DEVELOPER,
        fechaCreacion: '2023-03-20',
        fechaActualizacion: '',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/developer/Una gran agrupación de sitios web con muchos recursos.jpg',
        imgVertical:'',
        imgCuadro:'',
        categoria: 'developer',
        posicion: 'rot-1',
        estado: 'activo',
        imgSlider: {
            alt: 'Algoritmos de clasificación clave',
            height: '600',
            id: '3',
            ruta: 'https://plantillas_dev.gitlab.io/assets/img/posts/developer/poster/slide-1900x800.jpg',
            width: 'auto',
            post: 'dev-algoritmos-clave'
        }
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
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/developer/Una gran agrupación de sitios web con muchos recursos.jpg',
        imgVertical:'',
        imgCuadro:'',
        categoria: 'developer',
        posicion: 'rot-3',
        estado: 'activo',
        imgSlider: {
            alt: 'Diagramas de secuencia',
            height: '600',
            id: '3',
            ruta: 'https://plantillas_dev.gitlab.io/assets/img/posts/developer/poster/slide-1900x800.jpg',
            width: 'auto',
            post: 'dev-diagramas-secuencia'
        }
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
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/developer/Una gran agrupación de sitios web con muchos recursos.jpg',
        imgVertical:'',
        imgCuadro:'',
        categoria: 'developer',
        posicion: 'rot-3',
        estado: 'activo',
        imgSlider: {
            alt: 'Controles rápidos visual studio code',
            height: '600',
            id: '3',
            ruta: 'https://plantillas_dev.gitlab.io/assets/img/posts/developer/poster/slide-1900x800.jpg',
            width: 'auto',
            post: 'dev-controles-visual'
        }
    },
    {
        id: '27df71a4-6654-4349-9481-06f93c3639d6',
        nombre: 'Búsqueda empleo',
        descripcion: [
            'Esta publicación es un reflejo de mi propio proceso para ingresar a trabajar como desarrollador frontend. Iniciada la publicación estoy en búsqueda laboral de una buena empresa, espero que al terminarlo prueba todo lo que sugiero.',
            'Se me ha complicado ubicarme rápido como esperaba, así que empecé a investigar que puntos son los que define un contratador en su búsqueda de un desarrollador apropiado.',
            'Estoy en colombia y se acercan los meses finales del año, la mayoría de empresas llegada la época decembrina cierran contrataciones hasta el nuevo año, teniendo en cuenta que los encargados de contrataciones sacan sus vacaciones luego de la fiestas, entendiendo que llegadas esas fechas no es sugerible participar en procesos de selección, de igual forma no quiere decir que no pueda surgir una buena posibilidad, simplemente es menos probable.',
            'Las siguientes recomendaciones fueron probadas y las apruebo porque en mi proceso funcionaron.'
        ],
        descripcionCorta: 'Recomendaciones probadas en mi propia experiencia de búsqueda laboral.',
        ruta: 'dev-busqueda-empleo',
        componente: 'DevControlesVisualStudio',
        mostrarEnPostHome: true,
        estilos: ESTILO_DEVELOPER,
        fechaCreacion: '2023-09-18',
        fechaActualizacion: '',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/developer/Una gran agrupación de sitios web con muchos recursos.jpg',
        imgVertical:'',
        imgCuadro:'',
        categoria: 'developer',
        posicion: 'rot-3',
        estado: 'activo',
        imgSlider: {
            alt: 'Búsqueda empleo',
            height: '600',
            id: '3',
            ruta: 'https://plantillas_dev.gitlab.io/assets/img/posts/developer/poster/slide-1900x800.jpg',
            width: 'auto',
            post: 'dev-busqueda-empleo'
        }
    },
    {
        id: 'bec3c210-7438-4082-ab68-ff836b42b3eb',
        nombre: 'Glosario general',
        descripcion: [
            'Terminos en general en la programación, este glosario a medida reciba actualizaciones se ingresan más términos y su significado.'
        ],
        descripcionCorta: 'Recomendaciones probadas en mi propia experiencia de búsqueda laboral.',
        ruta: 'dev-busqueda-empleo',
        componente: 'DevControlesVisualStudio',
        mostrarEnPostHome: true,
        estilos: ESTILO_DEVELOPER,
        fechaCreacion: '2023-09-18',
        fechaActualizacion: '',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/developer/Una gran agrupación de sitios web con muchos recursos.jpg',
        imgVertical:'',
        imgCuadro:'',
        categoria: 'developer',
        posicion: 'rot-3',
        estado: 'activo',
        imgSlider: {
            alt: 'Búsqueda empleo',
            height: '600',
            id: '3',
            ruta: 'https://plantillas_dev.gitlab.io/assets/img/posts/developer/poster/slide-1900x800.jpg',
            width: 'auto',
            post: 'dev-busqueda-empleo'
        }
    },
]