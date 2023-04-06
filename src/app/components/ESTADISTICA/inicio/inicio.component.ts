import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContactFormService } from 'src/app/services/contact-form.service';
import { DataModel, PersonaModel, Usuario } from '../../../shared/models/persona.model';
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
  public loading: boolean = false;
  public error: any;

  constructor(private store: Store<AppState>,
              private consultaSorteos: ContactFormService,
              private usuarioService: PersonService) { }

  ngOnInit(): void {
    this.store.select('usuarios').subscribe( ({ users, loading, error }) =>{
      this.usuarios = users;
      this.loading = loading;
      this.error = error;
    })
/*     this.usuarioService.getUser()
        .subscribe( users => {
          this.usuarios = users;
        }) */
  this.store.dispatch( cargarUsuarios());
    
  }

}
