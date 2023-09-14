import { DatosPost, EstilosPost } from '../../shared/models/categorias.model';

export const ESTILO_JAVA: EstilosPost = {
    color: 'c-Java',
    colorFondo: 'bg-Java'
}


export const JAVA: DatosPost[] = [
    {
        id: 'd0210005-c92c-4f2a-8b57-cb22429c3aac',
        nombre: 'JAVA',
        descripcion: [],
        descripcionCorta: '',
        ruta: 'java',
        componente: 'JavasComponent',
        categoria: 'java',
        mostrarEnPostHome: false,
        estilos: ESTILO_JAVA,
        fechaCreacion: '',
        fechaActualizacion: '',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-1',
        estado: 'inactivo'
    },
    {
        id: '4f7645eb-12eb-4214-bd26-dfe68c89cfef',
        nombre: 'Glassfish',
        descripcion: ['Para empezar esta la instalación de angular simplemente, se puede tener en cuenta que trae de especial cada versión, obviamente la última versión nos muestra hasta donde a evolucionado el Framework. También estan los comandos de inicio, de creación y las opciones, que cuando empezamos no los tenemos a la mano.'],
        descripcionCorta: 'Instalación angular. Qué traen las versiones desde la js y todos los comandos del angular que desconocías.',
        ruta: 'java-glassfish',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_JAVA,
        fechaCreacion: '2023-03-17',
        fechaActualizacion: '2023-09-14',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg',
        imgVertical:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        imgCuadro:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        categoria: 'java',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: {
            alt: 'Glassfish',
            height: '600',
            id: '2',
            ruta: 'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-SLIDER.jpg',
            width: 'auto',
            post: 'java-glassfish'
        }
    },
    {
        id: '0326f90f-19cb-4c22-9daf-395c4b71a4b1',
        nombre: 'Instalación Java',
        descripcion: ['Para empezar esta la instalación de angular simplemente, se puede tener en cuenta que trae de especial cada versión, obviamente la última versión nos muestra hasta donde a evolucionado el Framework. También estan los comandos de inicio, de creación y las opciones, que cuando empezamos no los tenemos a la mano.'],
        descripcionCorta: 'Instalación angular. Qué traen las versiones desde la js y todos los comandos del angular que desconocías.',
        ruta: 'java-instalacion',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_JAVA,
        fechaCreacion: '2023-03-17',
        fechaActualizacion: '2023-09-14',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg',
        imgVertical:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        imgCuadro:'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-cuadro.jpg',
        categoria: 'java',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: {
            alt: 'Instalación Java',
            height: '600',
            id: '2',
            ruta: 'https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-SLIDER.jpg',
            width: 'auto',
            post: 'java-instalacion'
        }
    },
]