import { DatosPost, EstilosPost } from '../models/categorias.model';

export const ESTILO_ANGULAR: EstilosPost = {
    color: 'c-Angular',
    colorFondo: 'bg-Angular'
}

export const ANGULAR: DatosPost[] = [
    {
        id: '7084156673',
        nombre: 'Angular',
        descripcion: 'Angular esta en el grupo de los mejores frameworks web, cada 6 meses sin falta entrega una nueva versión y se ha permitido evolucionar.',
        descripcionCorta: '',
        ruta: 'angular',
        componente: 'AngularComponent',
        mostrarEnPostHome: false,
        estilos: ESTILO_ANGULAR,
        fechaCreacion: '2021-08-02',
        fechaActualizacion: '2021-08-02',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:'',
        categoria: 'angular',
        posicion: 'rot-1',
        activo: false
    },
    {
        id: '8627267684',
        nombre: 'Instalación Angular y recomendados',
        descripcion: 'Instalar Angular y empezar a desarrollar con este framework, no es un tema extenso y detallado para entrar en un análisis profundo, sin embargo esta vez la idea es poder especificar los cambios que se han recibido en cada versión como también algunas herramientas con las que se ha contado y no solemos saber que estan ahí. Empecemos por ver lo que Angular ha evolucionado con el paso del Tiempo en sus versiones',
        descripcionCorta: 'Instalación de Angular, recomendaciones y herramientas',
        ruta: 'ng-instalacion',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_ANGULAR,
        fechaCreacion: '2021-10-02',
        fechaActualizacion: '2023-01-24',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg',
        imgVertical:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        imgCuadro:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        categoria: 'angular',
        posicion: 'rot-2',
        activo: true
    },
    {
        id: '4791376137',
        nombre: 'Qué contiene Angular?',
        descripcion: 'Qué es y para qué un tsconfig.ts?, que es un package.json? para qué son las carpetas que tiene un proyecto de Angular, que pasa si se modifica este o el otro, miremos en detalle las posibilidades que han estado desde un buen principio pero que para aprender solo nos enseñaron a mover solo algunas',
        descripcionCorta: 'Instalación de Angular, recomendaciones y herramientas',
        ruta: 'ng-descripcion-elementos',
        componente: 'NgDescripcionElementosComponent',
        mostrarEnPostHome: true,
        estilos: ESTILO_ANGULAR,
        fechaCreacion: '2021-10-02',
        fechaActualizacion: '2021-10-02',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/angularPartes.png',
        imgVertical:'',
        imgCuadro:'',
        categoria: 'angular',
        posicion: 'rot-z',
        activo: true
    },
]