import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContactFormService } from 'src/app/services/contact-form.service';
import { DataModel, PersonaModel, Usuario } from '../../../models/persona.model';
import { cargarSorteos, cargarUsuarios } from '../store/actions';
import { AppState } from '../store/app.reducers';
import { PersonService } from '../../../services/person.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public usuarios: Usuario [] = [];

  constructor(private store: Store<AppState>,
              private consultaSorteos: ContactFormService,
              private usuarioService: PersonService) { }

  ngOnInit(): void {
/*     this.usuarioService.getUser()
        .subscribe( users => {
          console.log(users);
          this.usuarios = users;
        }) */
  this.store.dispatch( cargarUsuarios());
    
  }

}
