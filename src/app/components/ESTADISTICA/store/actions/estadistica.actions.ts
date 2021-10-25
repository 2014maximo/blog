import { createAction, props } from '@ngrx/store';
import { PersonaModel } from 'src/app/models/persona.model';

export const cargarSorteos = createAction('[Sorteos] Cargar Sorteos');

export const cargarSorteosSuccess = createAction(
    '[Sorteos] Cargar Sorteos Success',
    props<{ sorteos: PersonaModel[] }>()
);

export const cargarSorteosError = createAction(
    '[Sorteos] Cargar Sorteos Error',
    props<{ payload: any }>()
);
