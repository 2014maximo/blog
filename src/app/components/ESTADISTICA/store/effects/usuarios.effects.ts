import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions/usuarios.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class UsuariosEffects {

    constructor( private actions$: Actions ){}

    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType( usuariosActions.cargarUsuarios ),
            tap( data => console.log('effect tap ', data))
        )
    );
}