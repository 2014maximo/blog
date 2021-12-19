import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions/usuarios.actions';
import { tap, mergeMap, catchError, map } from 'rxjs/operators';
import { PersonService } from '../../../../services/person.service';
import { of } from 'rxjs';


@Injectable()
export class UsuariosEffects {

    constructor( private actions$: Actions,
                 private usuarioService: PersonService ){}

    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType( usuariosActions.cargarUsuarios ),
            mergeMap(
                () => this.usuarioService.getUser()
                .pipe(
                    map( users => usuariosActions.cargarUsuariosSuccess({ usuarios: users })),
                    catchError( err => of(usuariosActions.cargarUsuariosError({ payload: err })))
                )
            )
        )
    );
}