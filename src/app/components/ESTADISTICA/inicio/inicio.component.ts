import { Component, OnInit } from '@angular/core';
import { ContactFormService } from 'src/app/services/contact-form.service';
import { DataModel, PersonaModel } from '../../../models/persona.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public bloqueDatos: any;

  constructor(private contactFormService: ContactFormService) { }

  ngOnInit(): void {
    this.contactFormService.consultaPersonas().subscribe( data => {

      this.bloqueDatos = data.data;
      
    })
    
  }

}
