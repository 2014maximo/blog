import { Component, Input, OnInit } from '@angular/core';

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
    this.code = this.code.replace('<', '<span class="text-light">&lt;</span>');
    this.code = '<pre>'.concat(this.code);
    this.code = this.code.concat('</pre>');
    console.log(this.code, 'haber');
  }

  private cargaJavascript(){

  }

  private cargarTypescript(){

  }
  

}
