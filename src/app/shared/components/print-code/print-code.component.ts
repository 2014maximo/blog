import { Component, Input, OnInit } from '@angular/core';
import { referHTML } from './constants/referencias.constant';
import { TEMPLATE_1, TEMPLATE_2 } from '@app/components/ANGULAR/components/ng-rxjs-first-value-from/constants/contenido.constant';

@Component({
  selector: 'app-print-code',
  templateUrl: './print-code.component.html',
  styleUrls: ['./print-code.component.css']
})
export class PrintCodeComponent implements OnInit {

  @Input() public code: string = '';
  @Input() public tipo: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.remoldearSegunTipo();
  }

  private remoldearSegunTipo(){
    switch (this.tipo) {
      case 1: // HTML
        this.cargarHTML();
        break;

      case 2: // JAVASCRIPT
        this.cargaJavascript();
        break;

      case 3: // TYPESCRIPT
        this.cargarTypescript();
        break;
    }
  }


  private cargarHTML(){
    let template: string = '';
    this.code = TEMPLATE_1;
/*     for(let i=0; i < TEMPLATE_1.length; i++){
      let carac = TEMPLATE_1[i];
      console.log(carac);
    } */
    for(let i=0; i<this.code.length; i++){
      let anterior = this.code[-i]? this.code[-i] : '';
      let caracter = this.code[i];
      let construido = referHTML.find(e => e.referencia === caracter)?.retorno ?? this.code[i];
      console.log(construido);
      template = template + construido;
    }
    console.log(template);
    this.code = template;
    this.code = '<pre>'.concat(this.code);
    this.code = this.code.concat('</pre>');
  }

  private cargaJavascript(){

  }

  private cargarTypescript(){

  }
  

}
