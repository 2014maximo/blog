import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactFormService } from '../../../services/contact-form.service';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer-home',
  templateUrl: './footer-home.component.html',
  styleUrls: ['./footer-home.component.css']
})
export class FooterHomeComponent implements OnInit {

  public formContact: FormGroup;

  constructor(private fb: FormBuilder, private database: ContactFormService, public translate: TranslateService) {
    translate.setDefaultLang(navigator.language.split('-')[0]);
    this.formContact = this.fb.group({
      email:['', [Validators.required]],
      comentarios: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  enviar(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });

    let date = new Date();
    let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
    // fecha en formato "25/06/2021"

    let datos = {
      email: this.formContact.value.email,
      descripcion: this.formContact.value.comentarios,
      fecha: output
    }

    if(this.formContact.valid){
        this.database.create('form-contact', datos).then( res => {
      this.formContact.reset();
      Toast.fire({
        icon: 'success',
        title: 'El mensaje fue enviado correctamente'
      })
    }).catch( err => {
      console.error( err);
      Toast.fire({
        icon: 'error',
        title: 'No se puede enviar'
      })
    });
    } else {
      Toast.fire({
        icon: 'warning',
        title: 'Ingrese correctamente los datos'
      })
    }
  }

  public cambiarLenguaje(lang: string) {
    this.translate.use(lang); // Cambia el actual lenguaje
  }

}
