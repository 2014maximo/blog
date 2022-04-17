import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, tap } from 'rxjs/operators';
import { PersonaModel } from "src/app/models/persona.model";
import { ContactFormService } from "src/app/services/contact-form.service";
import * as sorteosActions from "../actions/estadistica.actions";

@Injectable()
export class SorteosEffects {

    constructor( private actions$: Actions,
                private sorteosService: ContactFormService ){

    }

/*     cargarSorteos = createEffect(
        () => this.actions$.pipe(
            ofType( sorteosActions.cargarSorteos ),
            tap( data => console.log('effect tap', data)),
            mergeMap( () => this.sorteosService.consultaSorteos()
                    .pipe(
                        // map( sorteos => sorteosActions.cargarSorteosSuccess({ sorteos: PersonaModel}))
                    )
            )
        )
    ); */

}