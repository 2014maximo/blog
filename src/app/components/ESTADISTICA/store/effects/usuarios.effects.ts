import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions/usuarios.actions';
import { tap, mergeMap } from 'rxjs/operators';
import { PersonService } from '../../../../services/person.service';


@Injectable()
export class UsuariosEffects {

    constructor( private actions$: Actions,
                 private usuarioService: PersonService ){}

    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType( usuariosActions.cargarUsuarios ),
            tap( data => console.log('effect tap ', data)),
            mergeMap(
                () => this.usuarioService.getUser()
                .pipe(
                    tap( data => console.log('getUsers effect', data))
                )
        )
    
        )
    );
}