import { DatosCategoria, DatosPost } from '../models/categorias.model';


const DATOS_CATEGORIA: DatosCategoria = {
    nombre: 'ANGULAR',
    color: 'c-Angular',
    fondo:'',
    path: 'angular',
    rutaIcono:'assets/img/icons/Angular.png'
}

export const ANGULAR: DatosPost[] = [
    {
        id: '7084156673',
        titulo: 'Angular',
        descripcion: 'Angular esta en el grupo de los mejores frameworks web, cada 6 meses sin falta entrega una nueva versión y se ha permitido evolucionar.',
        descripcionCorta: '',
        path: 'angular',
        componente: 'AngularComponent',
        mostrarEnPostHome: false,
        estilos: {
            color: ''
        },
        fechaCreacion: '02-08-2021',
        fechaActualizacion: '',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:'',
        categoria: DATOS_CATEGORIA
    },
    {
        id: '8627267684',
        titulo: 'Instalación Angular y recomendados',
        descripcion: 'Instalar Angular y empezar a desarrollar con este framework, no es un tema extenso y detallado para entrar en un análisis profundo, sin embargo esta vez la idea es poder especificar los cambios que se han recibido en cada versión como también algunas herramientas con las que se ha contado y no solemos saber que estan ahí. Empecemos por ver lo que Angular ha evolucionado con el paso del Tiempo en sus versiones',
        descripcionCorta: 'Instalación de Angular, recomendaciones y herramientas',
        path: 'ng-instalacion',
        componente: '',
        mostrarEnPostHome: true,
        estilos: {
            color: ''
        },
        fechaCreacion: '02-10-2021',
        fechaActualizacion: '03-02-2022',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg',
        imgVertical:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        imgCuadro:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        categoria: DATOS_CATEGORIA
    },
    {
        id: '4791376137',
        titulo: 'Qué contiene Angular?',
        descripcion: 'Qué es y para qué un tsconfig.ts?, que es un package.json? para qué son las carpetas que tiene un proyecto de Angular, que pasa si se modifica este o el otro, miremos en detalle las posibilidades que han estado desde un buen principio pero que para aprender solo nos enseñaron a mover solo algunas',
        descripcionCorta: 'Instalación de Angular, recomendaciones y herramientas',
        path: 'ng-descripcion-elementos',
        componente: 'NgDescripcionElementosComponent',
        mostrarEnPostHome: true,
        estilos: {
            color: ''
        },
        fechaCreacion: '02-10-2021',
        fechaActualizacion: '',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/angularPartes.png',
        imgVertical:'',
        imgCuadro:'',
        categoria: DATOS_CATEGORIA
    },
]