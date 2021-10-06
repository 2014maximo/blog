import { Component, OnInit, Input } from '@angular/core';
import { BloqueContenidoModel } from '../../models/bloque-contenidos.model';

@Component({
  selector: 'app-bloque-contenidos',
  templateUrl: './bloque-contenidos.component.html',
  styleUrls: ['./bloque-contenidos.component.css']
})
export class BloqueContenidosComponent implements OnInit {

  @Input() bloques: BloqueContenidoModel [] = []

  constructor() { }

  ngOnInit(): void {
  }

  public navegar(ulr: string){
    window.open(ulr, "_blank");
  }


}
