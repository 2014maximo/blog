import { GlosarioModel } from "@shared/models/categorias.model";



export const TERMINOS_TYPESCRIPT: GlosarioModel [] = [
    {
        id: 'fda67483-7ae1-436c-8821-353a5537bb5c',
        titulo: 'Interface',
        fechaActualizacion: '2023-09-08',
        mostrar:true,
        linksReferencia: [
            {
                urlLink:'ng-rxjs-first-value-from',
                titulo: 'RxJs First Value From'
            }
        ],
        descripcion: {
            listaTexto: [
                'No nos va a aparecer antes de la versión 7 de la libreria rxjs, esta función viene a reemplazar a "toPromise()", quedando en el abismo de los obsoletos.',
                'Su característica de operar es la de convertir un observable en una promesa que se cumple cuando devuelve el primer valor.'
            ]
        }
    },
]