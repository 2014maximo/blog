import { Component, Input, OnInit } from '@angular/core';
import { copiarAlPortapapeles } from '@shared/constants';
import { abrirUrl } from '@shared/constants/funciones/funciones-globales';

import 'prismjs';
import 'prismjs/components/prism-java'; 
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-typescript';


declare var Prism: any;

@Component({
  selector: 'app-print-code',
  templateUrl: './print-code.component.html',
  styleUrls: ['./print-code.component.css']
})
export class PrintCodeComponent implements OnInit {

  @Input() public code: string = '';
  @Input() public refDocumentacion: string = '';
  @Input() public urlStackBlitz: string = '';
  @Input() public lineas: number = 0;
  @Input() public lenguaje: string = '';


  contadorSaltosLinea: number = 0;
  clipboard: string = '';

  constructor() { }

  ngOnInit(): void {
    this.clipboard = this.code;
    Prism.highlightAll();
  }

  public contador(iteraciones: number) {
    return Array(iteraciones).fill(0).map((_, index) => index);
  }

  public copiarAlPortapapeles(cadenaAlclipboard: string) {
    copiarAlPortapapeles(cadenaAlclipboard);
  }

  public abrirLink(link:string){
    abrirUrl(link);
  }

}
