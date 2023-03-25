import { SubCategoriaModel, EstilosPost } from '../../models/categorias.model';

export const ESTILO_RXJS: EstilosPost = {
    color: 'c-Rxjs',
    colorFondo: 'bg-Rxjs'
}

export const SUB_NG: SubCategoriaModel[] = [
    {
        subCategoria: 'rxjs',
        post: [
            {
                id: 'ebfeb1a0-10d5-49b0-aaa2-4196e8f1dd98',
                nombre: 'FirstValueFrom() - RXJS',
                descripcion: 'Angular esta en el grupo de los mejores frameworks web, cada 6 meses sin falta entrega una nueva versión y se ha permitido evolucionar.',
                descripcionCorta: '',
                ruta: 'ng-rxjs-first-value-from',
                componente: 'NgRxjsFirstValueFromComponent',
                mostrarEnPostHome: true,
                estilos: ESTILO_RXJS,
                fechaCreacion: '2023-03-24',
                fechaActualizacion: '',
                imgHorizontal:'',
                imgVertical:'',
                imgCuadro:'',
                categoria: 'angular',
                posicion: 'rot-1',
                estado: 'activo'
            },
        ]
    }
]
