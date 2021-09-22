import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from 'src/app/models/post.model';

@Component({
  selector: 'app-instalacion-angular',
  templateUrl: './instalacion-angular.component.html',
  styleUrls: ['./instalacion-angular.component.css']
})
export class InstalacionAngularComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: 'assets/img/banner/Instalaciona-angular.jpg',
    fondo: false,
    tituloPost: 'INSTALACIÓN DE ANGULAR Y RECOMENDACIONES',
    alturaImagen: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
