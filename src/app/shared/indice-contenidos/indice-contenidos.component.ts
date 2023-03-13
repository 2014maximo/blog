import { Component, OnInit, Input } from '@angular/core';
import { IndiceDeContenidosModel } from 'src/app/models/indice.model';

@Component({
  selector: 'app-indice-contenidos',
  templateUrl: './indice-contenidos.component.html',
  styleUrls: ['./indice-contenidos.component.css']
})
export class IndiceContenidosComponent implements OnInit {

  @Input() indice: IndiceDeContenidosModel [] = [
    {
      nombre: '',
      posicion: '',
      ruta: '',
      colorFondo: '',
      color: '',
      estado: ''
    },
  ]
  
  @Input() clase: string = '';


  constructor() { }

  ngOnInit(): void {
  }

  scroll(id: string) {
    let el = document.getElementById(id);
    // @ts-ignore: Object is possibly 'null'.
    el.scrollIntoView();
  }

  validaEstado(estado: string):boolean{
    return estado === 'activo'? true : false
  }

}
