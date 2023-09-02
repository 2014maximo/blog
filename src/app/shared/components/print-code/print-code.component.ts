import { Component, Input, OnInit } from '@angular/core';
import { formateoHtml, referHTML } from './constants/referenciasHTML.constant';
import { TEMPLATE_1, TEMPLATE_2, TEMPLATE_3 } from '@app/components/ANGULAR/components/ng-rxjs-first-value-from/constants/contenido.constant';
import { copiarAlPortapapeles } from '@shared/constants';
import { abrirUrl } from '@shared/constants/funciones/funciones-globales';
import { cargarTypescript } from './constants/referenciasTypescript.constant';

@Component({
  selector: 'app-print-code',
  templateUrl: './print-code.component.html',
  styleUrls: ['./print-code.component.css']
})
export class PrintCodeComponent implements OnInit {

  @Input() public code: string = '';
  @Input() public tipo: number = 0;
  @Input() public refDocumentacion: string = '';
  @Input() public urlStackBlitz: string = '';

  contadorSaltosLinea: number = 0;
  clipboard: string = '';

  constructor() { }

  ngOnInit(): void {
    this.clipboard = this.code;
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
        this.code = cargarTypescript(this.code);
        break;
    }
  }


  private cargarHTML(){
    let template: string = '';
    let contadorSaltos: number = 0;

    for(let i=0; i<this.code.length; i++){
      let anterior = this.code[i-1]? this.code[i-1] : '';
      let actual = this.code[i];
      let siguiente = this.code[i+1]? this.code[i+1] : '';
      let componente: string = '';
      let cerrado = false;
      const soloTexto = /^[a-zA-Z]+$/;

      switch (actual) {
        case '<': // HTML
          if(siguiente === '/'){
            componente =`${this.referHTML('</')}${this.referHTML('abrirComponente')}${this.extraerComponente(i+1, '>',0,0)}${this.referHTML('cerrarComponente')}`;
          }else{
            componente =
            `${this.referHTML('<')}${this.referHTML('abrirComponente')}${this.extraerComponente(i, '>',0,0)}${this.referHTML('cerrarComponente')}`;
          }
          break;

        case '>':
          if(soloTexto.test(siguiente)){
            componente = 
            `<span class="c1">></span><span class="text-light">${this.extraerPalabrasCadena(i+1, '<')}</span>`
          } else {
            componente = this.referHTML('>');
          }
          cerrado = true;
          break;
        
        case '/':
          if(anterior !='<'){
            componente = this.referHTML('/');
          } else if(anterior === '<'){
            //componente = `${}` this.extraerComponente(i, '>');
          }
          break;
        
        case '\n':
          componente = '\n';
          this.contadorSaltosLinea = this.contadorSaltosLinea +1;
          break;
        
        case ' ':
          if(siguiente === '('){
            componente =
            ` ${this.referHTML('abrirParentesisInterno')}${this.referHTML('abrirComponenteInterno')}${this.extraerComponente(i+2, ')',2,-2)}${this.referHTML(')')}${this.referHTML('cerrarComponente')}`
          } else if(siguiente === '['){
            componente = 
            ` ${this.referHTML('abrirCorcheteInterno')}${this.referHTML('abrirComponenteInterno')}${this.extraerComponente(i+2, ']',2,-2)}${this.referHTML(']')}${this.referHTML('cerrarComponente')}`
          } else if(soloTexto.test(siguiente)){
            componente = ` ${this.referHTML('abrirComponenteInterno')}${this.extraerComponente(i+1, '=',0,0)}${this.referHTML('cerrarComponente')}`
          } else {
            componente = ' ';
          }
          break;

          case '=':
            componente = this.referHTML('=');
          break;

          case '"':
            if(anterior === '='){
              componente =`${this.referHTML("abrirTextoCadena")}${this.referHTML("cerrarComponente")}${this.referHTML("abrirTexto")}${this.extraerPalabrasCadena(i+1, '"')}${this.referHTML("abrirTextoCadena")}${this.referHTML("cerrarComponente")}`;
            };
            break;

        default:
          componente = actual;
          break;

      }

    let construido = componente?? this.code[i];
    template = template + construido;

    }
    this.code = template;
    this.code = '<pre class="fuenteTres fw-5 fs-17">'.concat(this.code);
    this.code = this.code.concat('</pre>');
  }

  private referHTML(actual:string): string{
    return referHTML.find( e => e.referencia === actual)?.retorno ?? actual;
  }

  private extraerComponente(posicion:number, refer:string, corteRecomendado:number, posicionRecomendada:number):string{
    let puntoCorte=0;
    for(let j=posicion; j < this.code.length; j++){
      let actual = this.code[j];
      console.log(this.code[j])
      if(this.code[j] === refer){
        puntoCorte = j;
        break
      }
    }


    let extraido = this.code.substring(posicion,puntoCorte);

    if(extraido.indexOf(" ") !== -1) {
      extraido = `${extraido.split(' ')[0]}` ; // si tiene un espacio: 
    }else if(extraido.indexOf("/") !== -1){
      extraido = extraido.split('/')[1]
    } 

    let longitud = extraido[0] === '<'? extraido.slice(1) : extraido;

    let posicionSegun = refer==='='? posicion : posicion+1;

    this.code = this.devolverSinComponente(posicionSegun+posicionRecomendada, longitud.length+corteRecomendado);

    return extraido[0] === '<'? extraido.slice(1) : extraido;
  }

  private extraerPalabrasCadena(posicion:number, refer:string): string{
    let puntoCorte;
    for(let j=posicion; j < this.code.length; j++){
      let actual = this.code[j];
      console.log(this.code[j])
      if(this.code[j] === refer){
        puntoCorte = j;
        break
      }
    }

    let extraido = this.code.substring(posicion,puntoCorte);

    let longitud = extraido[0] === '<'? extraido.slice(1) : extraido;

    this.code = this.devolverSinComponente(posicion, longitud.length);

    return extraido[0] === '<'? extraido.slice(1) : extraido;
  }

  private devolverSinComponente(posicionInicial:number, longitud:number):string{
    const parteInicial = this.code.substring(0, posicionInicial);
    const parteFinal = this.code.substring(posicionInicial + longitud);
    return `${parteInicial}${parteFinal}`;
  }

  private cargaJavascript(){

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
