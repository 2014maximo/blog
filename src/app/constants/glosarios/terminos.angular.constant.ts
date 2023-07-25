import { GlosarioModel } from '../../shared/models/categorias.model';


export const TERMINOS_ANGULAR: GlosarioModel [] = [
    {
        id: 'bfbfe921-9666-402f-98d3-98f45716b57f',
        titulo: 'firstValueFrom (RXJS)',
        fechaActualizacion: '2023-04-01',
        mostrar:true,
        linkReferencia: 'ng-rxjs-first-value-from',
        descripcion: {
            listaTexto: [
                'No nos va a aparecer antes de la versión 7 de la libreria rxjs, esta función viene a reemplazar a "toPromise()", quedando en el abismo de los obsoletos.',
                'Su característica de operar es la de convertir un observable en una promesa que se cumple cuando devuelve el primer valor.'
            ]
        }
    },
    {
        id: '6f3b8325-3262-421f-ac5a-7ed4946487a6',
        titulo: 'lastValueFrom() (RXJS)',
        fechaActualizacion: '2023-04-01',
        mostrar:true,
        linkReferencia: '',
        descripcion: {
            listaTexto: [
                'No nos va a aparecer antes de la versión 7 de la libreria rxjs, esta función viene a reemplazar a "toPromise()", quedando en el abismo de los obsoletos.',
                'Su característica de operar es la de convertir un observable en una promesa que se cumple cuando devuelve el último valor.'
            ]
        }
    },
    {
        id: 'ebfeb1a0-10d5-49b0-aaa2-4196e8f1dd98',
        titulo: 'first() (RXJS)',
        fechaActualizacion: '2023-04-01',
        mostrar:true,
        linkReferencia: '',
        descripcion: {
            listaTexto: [
                'En simples palabras, esta función devuelve el primer elemento emitido y termina una vez lo reciba.'
            ]
        }
    },
    {
        id: 'ebfeb1a0-10d5-49b0-aaa2-4196e8f1dd98',
        titulo: 'takeUntil() (RXJS)',
        fechaActualizacion: '2023-04-01',
        mostrar:true,
        linkReferencia: '',
        descripcion: {
            listaTexto:[
                'Emite valores hasta que le notifiquen que no siga emitiendo con un observable que emite un valor, en ese momento se completa.'
            ]
        }
    },
    {
        id: '3217d630-5cff-4354-87b7-9c26f00e7795',
        titulo: ' EmptyError (RXJS)',
        fechaActualizacion: '2023-04-02',
        mostrar:true,
        linkReferencia: '',
        descripcion: {
            listaTexto:[
                'Dentro de la RxJS, es una interfaz que no contiene elementos, se usa en observables como first(), last(), entre otros.'
            ]
        }
    },
    {
        id: '88946c62-ebc1-45b5-bcd5-84b36e43f896',
        titulo: 'take() (RXJS)',
        fechaActualizacion: '2023-04-01',
        mostrar:true,
        linkReferencia: '',
        descripcion: {
            listaTexto:[
                'Emite valores hasta que le notifiquen que no siga emitiendo con un observable que emite un valor, en ese momento se completa.'
            ]
        }
    },
    {
        id: 'bc9b8768-33a0-494d-ab11-5c1395691305',
        titulo: 'BehaviorSubject (RXJS)',
        fechaActualizacion: '2023-04-01',
        mostrar:true,
        linkReferencia: '',
        descripcion: {
            listaTexto:[
                'Cuando se conoce o se ha trabajado frecuentemente con éste, se sabe que puede traer comportamientos inesperados en situaciones no controladas. No es muy recomendable.'
            ]
        }
    },
    {
        id: '5f28e16a-eb45-4a00-aac4-6334f98ea256',
        titulo: 'Router',
        fechaActualizacion: '2023-04-01',
        mostrar:false,
        linkReferencia: '',
        descripcion: {
            listaTexto:[
                'Sistema de manejo de rutas, desde la versión "AngularJS" pasa vario cambios, actualmente '
            ]
        }
    },
    {
        id: '88c903d6-3f8d-49b1-9d4f-8679a4599367',
        titulo: 'GuardsCheckStart - @angular/router',
        fechaActualizacion: '2023-04-01',
        mostrar:true,
        linkReferencia: '',
        descripcion: {
            listaTexto:[
                'Evento desencadenado al comienzo de la fase de vigilancia del enrutamiento.'
            ]
        }
    },
    {
        id: 'ea8dc086-a91f-475f-a575-e024c6ed1ad1',
        titulo: 'ChildActivationStart - @angular/router',
        fechaActualizacion: '2023-04-01',
        mostrar:true,
        linkReferencia: '',
        descripcion: {
            listaTexto:[
                'Evento desencadenado al comienzo de la parte de activación secundaria de la fase de resolución del enrutamiento.'
            ]
        }
    },
    {
        id: '4c871f47-8b02-46ff-be0c-ad8291190839',
        titulo: 'ActivationStart - @angular/router',
        fechaActualizacion: '2023-04-01',
        mostrar:true,
        linkReferencia: '',
        descripcion: {
            listaTexto:[
                'Evento desencadenado al comienzo de la parte de activación de la fase de resolución del enrutamiento.'
            ]
        }
    },
    {
        id: 'ca6bc4f4-11d9-4fe8-b26c-6986836f647e',
        titulo: 'GuardsCheckEnd  - @angular/router',
        fechaActualizacion: '2023-04-01',
        mostrar:true,
        linkReferencia: '',
        descripcion: {
            listaTexto:[
                'Evento desencadenado al final de la fase de Guardia del enrutamiento.'
            ]
        }
    },
    {
        id: '2ae90637-6d50-44ea-a5ff-3251e79602a2',
        titulo: 'ResolveStart',
        fechaActualizacion: '2023-04-01',
        mostrar:false,
        linkReferencia: '',
        descripcion: {
            listaTexto:[
                ''
            ]
        }
    },
    {
        id: '551a092d-c99f-4302-8f5d-612bf8493632',
        titulo: 'ResolveEnd',
        fechaActualizacion: '2023-04-01',
        mostrar:false,
        linkReferencia: '',
        descripcion: {
            listaTexto:[
                ''
            ]
        }
    },
    {
        id: '103678ce-b221-4a37-82c7-f8844c8a54b1',
        titulo: 'ActivationEnd',
        fechaActualizacion: '2023-04-01',
        mostrar:false,
        linkReferencia: '',
        descripcion: {
            listaTexto:[
                ''
            ]
        }
    },
    {
        id: '49cad8dc-f7bb-44c9-b45d-dc7deba02733',
        titulo: 'ChildActivationEnd',
        fechaActualizacion: '2023-04-01',
        mostrar:false,
        linkReferencia: '',
        descripcion: {
            listaTexto:[
                ''
            ]
        }
    },
    {
        id: '96019f97-c2d3-444a-b835-7168191bd4bf',
        titulo: 'ChildActivationEnd',
        fechaActualizacion: '2023-04-01',
        mostrar:false,
        linkReferencia: '',
        descripcion: {
            listaTexto:[
                ''
            ]
        }
    },
    {
        id: '7f04dc8e-e178-4a3c-b8cd-2a1ef1f08fb5',
        titulo: 'AOT (AHead Of Time)',
        fechaActualizacion: '2023-04-01',
        mostrar:false,
        linkReferencia: '',
        descripcion: {
            listaTexto:[
                ''
            ]
        }
    },
    {
        id: '10a83161-5d40-4492-9990-9ae88acbf4b8',
        titulo: 'bundles',
        fechaActualizacion: '2023-04-01',
        mostrar:false,
        linkReferencia: '',
        descripcion: {
            listaTexto:[
                ''
            ]
        }
    },

]