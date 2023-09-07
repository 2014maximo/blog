import { Component, Input, OnInit } from '@angular/core';
import { copiarAlPortapapeles } from '@shared/constants';
import { abrirUrl } from '@shared/constants/funciones/funciones-globales';

import 'prismjs';
import 'prismjs/components/prism-java'; 
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-typescript';
import { CategoriaPostModel } from '@shared/models/categorias.model';


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
  @Input() public colorTextoBase: string = '';
  @Input() public categoriaCorta: string = '';
  @Input() public categoria = new CategoriaPostModel();;

  contadorSaltosLinea: number = 0;
  clipboard: string = '';

  constructor() { }

  ngOnInit(): void {
    this.clipboard = this.code;
    console.log(this.categoria);
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
