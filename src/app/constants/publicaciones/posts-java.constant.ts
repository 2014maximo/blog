import { DatosPost, EstilosPost, RefImg } from '@shared/models/categorias.model';

export const ESTILO_JAVA: EstilosPost = {
    color: 'c-Java',
    colorFondo: 'bg-Java'
}


export const JAVA: DatosPost[] = [
    {
        id: 'd0210005-c92c-4f2a-8b57-cb22429c3aac',
        nombre: 'JAVA.java.nombre',
        referenciaBusqueda:'JAVA.java.referenciaBusqueda',
        descripcion: [
            'JAVA.java.descripcion.tx1',
            'JAVA.java.descripcion.tx2',
            'JAVA.java.descripcion.tx3',
            'JAVA.java.descripcion.tx4',
            'JAVA.java.descripcion.tx5',
            'JAVA.java.descripcion.tx6',
            'JAVA.java.descripcion.tx7',
            'JAVA.java.descripcion.tx8',
            'JAVA.java.descripcion.tx9',
            'JAVA.java.descripcion.tx10'
        ],
        descripcionCorta: 'JAVA.java.descripcionCorta',
        ruta: 'java',
        componente: 'JavasComponent',
        categoria: 'java',
        mostrarEnPostHome: false,
        estilos: ESTILO_JAVA,
        fechaCreacion: '',
        fechaActualizacion: '',
        imgHorizontal: new RefImg(),
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-1',
        estado: 'inactivo'
    },
    {
        id: '4f7645eb-12eb-4214-bd26-dfe68c89cfef',
        nombre: 'JAVA.java-glassfish.nombre',
        referenciaBusqueda:'JAVA.java-glassfish.referenciaBusqueda',
        descripcion: ['JAVA.java-glassfish.descripcion.tx1'],
        descripcionCorta: 'JAVA.java-glassfish.descripcionCorta',
        ruta: 'java-glassfish',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_JAVA,
        fechaCreacion: '2023-03-17',
        fechaActualizacion: '2023-09-14',
        imgHorizontal: new RefImg('https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg'),
        imgVertical:'',
        imgCuadro:'',
        categoria: 'java',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: undefined
    },
    {
        id: '0326f90f-19cb-4c22-9daf-395c4b71a4b1',
        nombre: 'JAVA.java-instalacion.nombre',
        referenciaBusqueda:'JAVA.java-instalacion.referenciaBusqueda',
        descripcion: [
            'JAVA.java-instalacion.descripcion.tx1'
            
        ],
        descripcionCorta: 'JAVA.java-instalacion.descripcionCorta',
        ruta: 'java-instalacion',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_JAVA,
        fechaCreacion: '2023-03-17',
        fechaActualizacion: '2023-09-14',
        imgHorizontal: new RefImg('https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg'),
        imgVertical:'',
        imgCuadro:'',
        categoria: 'java',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: undefined
    },
]