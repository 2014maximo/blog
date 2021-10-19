import { Component, OnInit } from '@angular/core';
import { ContactFormService } from 'src/app/services/contact-form.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private contactFormService: ContactFormService) { }

  ngOnInit(): void {
    this.contactFormService.consultaPersonas().subscribe( data => {
      console.log(data, 'LOST DATOS QUE VIENEN');
    })
    
  }

}
