import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';

@Component({
  selector: 'app-js-trabajo-fechas',
  templateUrl: './js-trabajo-fechas.component.html',
  styleUrls: ['./js-trabajo-fechas.component.css']
})
export class JsTrabajoFechasComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
  }

  public fecha: any;

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/icons/calendar.png',
      fondo: true,
      tituloPost: 'TRABAJO CON FECHAS',
      alturaImagen: '350',
      sombra: 'drop'
    };
    this.fecha = this.probarFecha('2004-10-04',1);;
    
  }
  probarFecha(fecha: string, caso: number): Date {
    /*
      CASO: 1 = "YYYY-MM-DD"
      CASO: 2 = "DD-MM-YYYY"
      CASO: 3 = "YYYY/MM/DD"
      CASO: 4 = "DD/MM/YYYY"
    */
    let fechaFormateada: Date = new Date();
    let anio;
    let mes;
    let día;


    switch(caso){
      case 1:

      
      let cadena = '2014-12-03';
      let fechaArray = cadena.split('-');
      // fechaArray [
      //   0:'2014',
      //   1:'12',
      //   2:'03'
      // ]
      fechaFormateada = new Date(Number(fechaArray[0]),Number(fechaArray[1]), Number(fechaArray[2]));
      // fechaFormateada = 'Thu Nov 04 2004 00:00:00 GMT-0500 (hora estándar de Colombia)'




      console.log(fechaFormateada,'EL STRING SIN GUION');
      break

    }
    return fechaFormateada;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
