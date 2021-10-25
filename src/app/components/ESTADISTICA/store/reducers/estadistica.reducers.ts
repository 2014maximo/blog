import { createReducer, on } from '@ngrx/store';
import { cargarSorteos, cargarSorteosError, cargarSorteosSuccess } from '../actions';

export interface SorteoState {
    sorteos : [],
    loaded  : boolean,
    loading : boolean,
    error   : any
}

export const sorteosInitialState: SorteoState = {
    sorteos : [],
    loaded  : false,
    loading : false,
    error   : null
}

const _counterReducer = createReducer( sorteosInitialState, 
    on( cargarSorteos, state => ({ ...state, loading: true })),
);

/* export function counterReducer(state, action) {
    return _counterReducer(state, action);
} */

