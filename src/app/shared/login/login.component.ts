import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = this.fb.group({
      user:['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.inicializarVariables();
  }
  
  ngOnInit(): void {
  }

  inicializarVariables() {

  }

  ingresar(){
    let usuario = this.form.value.user;
    let contrasena = this.form.value.password;

    this.authService.login(usuario, contrasena).then( res =>{
      console.log(res, 'INGRESO');
    });

  }

  ingresarGoogle(){
    let usuario = this.form.value.user;
    let contrasena = this.form.value.password;

    this.authService.loginGoogle(usuario, contrasena).then( res =>{
      console.log(res, 'SE REGISTRO');
    });
  }

  

}
