import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, tap } from 'rxjs/operators';
import { ContactFormService } from "src/app/services/contact-form.service";
import * as usuariosActions from "../actions/estadistica.actions";

@Injectable()
export class SorteosEffects {

    constructor( private actions$: Actions,
                private sorteosService: ContactFormService ){

    }

    cargarSorteos = createEffect(
        () => this.actions$.pipe(
            ofType( usuariosActions.cargarSorteos ),
            tap( data => console.log('effect tap', data)),
            mergeMap( () => this.sorteosService.consultaPersonas()
                    .pipe(
                        map( sorteos => usuariosActions.cargarSorteosSuccess({ sorteos: sorteos}))
                    )
            )
        )
    );

}