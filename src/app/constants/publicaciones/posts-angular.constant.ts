import { DatosPost, EstilosPost } from '../../models/categorias.model';

export const ESTILO_ANGULAR: EstilosPost = {
    color: 'c-Angular',
    colorFondo: 'bg-Angular'
}

export const ANGULAR: DatosPost[] = [
    {
        id: 'eb4011f5-81df-4261-b5c5-8f58d2ba88b5',
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
        estado: 'inactivo'
    },
    {
        id: '8618eb718b-655b-49a8-9e6e-f3732922b2df',
        nombre: 'Instalación Angular y recomendados',
        descripcion: 'Para empezar esta la instalación de angular simplemente, se puede tener en cuenta que trae de especial cada versión, obviamente la última versión nos muestra hasta donde a evolucionado el Framework. También estan los comandos de inicio, de creación y las opciones, que cuando empezamos no los tenemos a la mano.',
        descripcionCorta: 'Instalar brevemente angular, detalles especiales de las versiones, conocer los comandos básicos.',
        ruta: 'ng-instalacion',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_ANGULAR,
        fechaCreacion: '2023-05-07',
        fechaActualizacion: '2023-05-20',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg',
        imgVertical:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        imgCuadro:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        categoria: 'angular',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: {
            alt: 'Instalación Angular y recomendados',
            height: '600',
            id: '2',
            ruta: 'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-SLIDER.jpg',
            width: 'auto',
            post: 'ng-instalacion'
        }
    }
]