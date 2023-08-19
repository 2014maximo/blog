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

    for(let i=0; i<this.code.length; i++){
      let anterior = this.code[i-1]? this.code[i-1] : '';
      let actual = this.code[i];
      let siguiente = this.code[i+1]? this.code[i+1] : '';
      let componente: string = '';

      switch (this.code[i]) {
        case '<': // HTML
          componente = this.extraerComponente(i, '>');
          console.log(componente);
          break;

      }



      let construido = referHTML.find(e => e.referencia === actual)?.retorno ?? this.code[i];
      
      console.log(construido);
      template = template + construido;
    }
    console.log(template);
    this.code = template;
    this.code = '<pre>'.concat(this.code);
    this.code = this.code.concat('</pre>');
  }

  private extraerComponente(posicion:number, refer:string):string{
    let puntoCorte;
    for(let j=posicion; j<this.code.length; j++){
      let actual = this.code[j];
      console.log(this.code[j])
      if(this.code[j] === refer){
        puntoCorte = j;
        break
      }
    }

    let extraido = this.code.substring(posicion,puntoCorte);

    if(extraido.indexOf(" ") !== -1) {
      extraido = extraido.split(' ')[0]
    } 
    return extraido.slice(1);
  }

  private cargaJavascript(){

  }

  private cargarTypescript(){

  }
  

}
