import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from 'src/app/models/post.model';
import { AccordeonPostModel, ObjectAccordeonPostModel, AccordeonModel } from '../../../models/post.model';

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
  public accordeonContend: AccordeonModel [] = [
  {
    elemento: '',
    nClass: '',
  }
]
  


  constructor() { 
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables(){
    this.accordeonContend = [
        {
          elemento: 'AngularJS: El inicio',
          nClass: 'motrarUno',
          mostrarlo: false,
          contenido: 'El punto de partida de angular 20 de octubre de 2010'
        },
        {
          elemento: 'Angular v2',
          nClass: 'motrarDos',
          mostrarlo: false,
          contenido: 'Estabilidad al ecosistema, ahora con "Operación Byelog" un proceso al que en Angular llaman “Operación Byelog”'
        }
      ]
    

    this.cabeceraPost = {
      rutaImagen: 'assets/img/banner/Instalaciona-angular.jpg',
      fondo: false,
      tituloPost: 'INSTALACIÓN DE ANGULAR Y RECOMENDACIONES',
      alturaImagen: ''
    };
  }

  public copiarAlPortapapeles(cadenaAlclipboard: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = cadenaAlclipboard;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
