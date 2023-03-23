import { GlosarioModel } from '../../models/categorias.model';


export const TERMINOS_ANGULAR: GlosarioModel [] = [
    {
        id: 'bfbfe921-9666-402f-98d3-98f45716b57f',
        titulo: 'firstValueFrom (RXJS)',
        linkReferencia: 'ng-rxjs-1',
        descripcion: [
            'No nos va a aparecer antes de la versión 7 de la libreria rxjs, este viene a reemplazar la "toPromise()", quedando en el abismo de los obsoletos.',
            'Su característica de operar es la de convertir un observable en una promesa que se cumple cuando devuelve el primer valor.'
        ]
    },
    {
        id: '6f3b8325-3262-421f-ac5a-7ed4946487a6',
        titulo: 'lastValueFrom() (RXJS)',
        linkReferencia: 'ng-rxjs-1',
        descripcion: [
            'No nos va a aparecer antes de la versión 7 de la libreria rxjs, este viene a reemplazar la "toPromise()", quedando en el abismo de los obsoletos.',
            'Su característica de operar es la de convertir un observable en una promesa que se cumple cuando devuelve el último valor.'
        ]
    },
    {
        id: 'ebfeb1a0-10d5-49b0-aaa2-4196e8f1dd98',
        titulo: 'first (RXJS)',
        linkReferencia: 'ng-rxjs-1',
        descripcion: [
            'En simples palabras devuelve el primer elemento emitido y termina una vez lo reciba.'
        ]
    },

]