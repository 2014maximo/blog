import { ActionReducerMap } from "@ngrx/store";
import * as reducers from './reducers';


export interface AppState {
    sorteos: reducers.SorteoState
}

export const appReducers: ActionReducerMap<AppState> = {
    sorteos: reducers.sorteosReducer
}