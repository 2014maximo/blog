import { createReducer, on } from '@ngrx/store';
import { PersonaModel } from 'src/app/models/persona.model';
import { cargarSorteos, cargarSorteosError, cargarSorteosSuccess } from '../actions';

export interface SorteoState {
    sorteos : [],
    loaded  : boolean,
    loading : boolean,
    error   : any
}

/* export const sorteosInitialState: SorteoState = {
    // sorteos : PersonaModel[],
    loaded  : false,
    loading : false,
    error   : null
} */

/* const _sorteosReducer = createReducer( sorteosInitialState, 

    on( cargarSorteos, state => ({ ...state, loading: true })),

    on( cargarSorteosSuccess, (state, { sorteos }) => ({
        ...state,
        loading: false,
        loaded: true,
        sorteo: [ ...sorteos ]
    })),

    on( cargarSorteosError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: payload
    })),


); */

/* export function sorteosReducer(state, action) {
    return _sorteosReducer(state, action);
} */

