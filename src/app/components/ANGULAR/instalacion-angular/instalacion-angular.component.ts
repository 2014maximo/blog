import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from 'src/app/models/post.model';
import { AccordeonPostModel, ObjectAccordeonPostModel } from '../../../models/post.model';

@Component({
  selector: 'app-instalacion-angular',
  templateUrl: './instalacion-angular.component.html',
  styleUrls: ['./instalacion-angular.component.css']
})
export class InstalacionAngularComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: ''
  }
  public accordeonContend: ObjectAccordeonPostModel = {
    dataParent: '',
    content: []
  }
  


  constructor() { 
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables(){
    this.accordeonContend = {
      dataParent: 'accordeon',
      content: [
        {
          idHeading: 'headingOne',
          contentHead: 'AngularJS: El inicio',
          idCollapse: 'collapseOne',
          contendBody: 'El punto de partida de angular 20 de octubre de 2010'
        },
        {
          idHeading: 'headingTwo',
          contentHead: 'Angular II',
          idCollapse: 'collapseTwo',
          contendBody: 'Estabilidad al ecosistema, ahora con "Operación Byelog" un proceso al que en Angular llaman “Operación Byelog”'
        }
      ]
    }

    this.cabeceraPost = {
      rutaImagen: 'assets/img/banner/Instalaciona-angular.jpg',
      fondo: false,
      tituloPost: 'INSTALACIÓN DE ANGULAR Y RECOMENDACIONES',
      alturaImagen: ''
    };
  }

}
