import { GlosarioModel } from "@shared/models/categorias.model";

export const TERMINOS_LINUX: GlosarioModel [] = [
    {
        id: 'fda67483-7ae1-436c-8821-353a5537bb5c',
        titulo: 'Ver archivos ocultos por terminal',
        fechaActualizacion: '2023-09-08',
        mostrar:true,
        linksReferencia: [
            {
                urlLink:'',
                titulo: 'Ver archivos ocultos por terminal'
            }
        ],
        descripcion: {
            listaTexto: [
                'ls -lFa'
            ]
        }
    },
]