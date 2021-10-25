import { createReducer, on } from '@ngrx/store';
import { cargarSorteos, cargarSorteosError, cargarSorteosSuccess } from '../actions';

export interface State {
    key: String;
}

export const initialState: State = {
    key: 'hola'
}

