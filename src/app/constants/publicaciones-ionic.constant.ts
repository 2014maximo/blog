import { SubCategoriaModel, EstilosPost } from '../models/categorias.model';

export const ESTILO_IONIC: EstilosPost = {
    color: 'c-Ionic',
    colorFondo: 'bg-Ionic'
}

export const IONIC: SubCategoriaModel[] = [
    {
        subCategoria: 'ionic',
        post: [
            {
                id: '7084156673',
                nombre: 'Ionic',
                descripcion: 'Angular esta en el grupo de los mejores frameworks web, cada 6 meses sin falta entrega una nueva versión y se ha permitido evolucionar.',
                descripcionCorta: '',
                ruta: 'angular',
                componente: 'AngularComponent',
                mostrarEnPostHome: false,
                estilos: ESTILO_IONIC,
                fechaCreacion: '2021-08-02',
                fechaActualizacion: '2021-08-02',
                imgHorizontal:'',
                imgVertical:'',
                imgCuadro:'',
                categoria: 'angular',
                posicion: 'rot-z',
                activo: true
            },
        ]
    }
]
