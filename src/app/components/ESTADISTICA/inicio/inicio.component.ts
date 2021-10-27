import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContactFormService } from 'src/app/services/contact-form.service';
import { DataModel, PersonaModel } from '../../../models/persona.model';
import { cargarSorteos } from '../store/actions';
import { AppState } from '../store/app.reducers';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public bloqueDatos: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.dispatch( cargarSorteos())
/*     this.contactFormService.consultaPersonas().subscribe( data => {

      this.bloqueDatos = data.data;
      
    }) */
    
  }

}
