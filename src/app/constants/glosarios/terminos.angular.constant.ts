import { GlosarioModel } from '../../models/categorias.model';


export const TERMINOS_ANGULAR: GlosarioModel [] = [
    {
        id: 'bfbfe921-9666-402f-98d3-98f45716b57f',
        titulo: 'firstValueFrom (RXJS)',
        linkReferencia: 'ng-rxjs-first-value-from',
        descripcion: [
            'No nos va a aparecer antes de la versión 7 de la libreria rxjs, este viene a reemplazar a "toPromise()", quedando en el abismo de los obsoletos.',
            'Su característica de operar es la de convertir un observable en una promesa que se cumple cuando devuelve el primer valor.'
        ]
    },
    {
        id: '6f3b8325-3262-421f-ac5a-7ed4946487a6',
        titulo: 'lastValueFrom() (RXJS)',
        linkReferencia: 'ng-rxjs-1',
        descripcion: [
            'No nos va a aparecer antes de la versión 7 de la libreria rxjs, este viene a reemplazar a "toPromise()", quedando en el abismo de los obsoletos.',
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
    {
        id: 'ebfeb1a0-10d5-49b0-aaa2-4196e8f1dd98',
        titulo: 'takeUntil() (RXJS)',
        linkReferencia: 'ng-rxjs-1',
        descripcion: [
            'Emite valores hasta que le notifiquen que no siga emitiendo con un observable que emite un valor, en ese momento se completa.'
        ]
    },
    {
        id: '3217d630-5cff-4354-87b7-9c26f00e7795',
        titulo: ' EmptyError (RXJS)',
        linkReferencia: 'ng-rxjs-1',
        descripcion: [
            'Emite valores hasta que le notifiquen que no siga emitiendo con un observable que emite un valor, en ese momento se completa.'
        ]
    },
    {
        id: '88946c62-ebc1-45b5-bcd5-84b36e43f896',
        titulo: ' take(1) (RXJS)',
        linkReferencia: 'ng-rxjs-1',
        descripcion: [
            'Emite valores hasta que le notifiquen que no siga emitiendo con un observable que emite un valor, en ese momento se completa.'
        ]
    },
    {
        id: 'bc9b8768-33a0-494d-ab11-5c1395691305',
        titulo: ' BehaviorSubject (RXJS)',
        linkReferencia: 'ng-rxjs-1',
        descripcion: [
            'Cuando se conoce o se ha trabajado frecuentemente con éste, se sabe que puede traer comportamientos inesperados en situaciones no controladas. No es muy recomendable.'
        ]
    },

]