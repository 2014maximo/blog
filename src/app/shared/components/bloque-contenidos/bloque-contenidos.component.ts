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
