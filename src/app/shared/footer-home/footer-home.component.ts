import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactFormService } from '../../services/contact-form.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer-home',
  templateUrl: './footer-home.component.html',
  styleUrls: ['./footer-home.component.css']
})
export class FooterHomeComponent implements OnInit {

  public formContact: FormGroup;

  constructor(private fb: FormBuilder, private database: ContactFormService) {
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

    let datos = {
      email: this.formContact.value.email,
      descripcion: this.formContact.value.comentarios
    }

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

  }

}
