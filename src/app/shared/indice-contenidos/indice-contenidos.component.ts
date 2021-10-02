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
      fondo: '',
      colorTexto: ''
    },
]


  constructor() { }

  ngOnInit(): void {
  }

}
