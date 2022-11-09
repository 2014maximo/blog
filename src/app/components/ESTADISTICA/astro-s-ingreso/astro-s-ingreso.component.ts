import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { WebServicesService } from '../../../services/web-services.service';
import { SIGNOS } from '../../../constants/globales.constant';
import { CuatroDigitosPorTres, CuatroDigitosPorTresCadena } from '../../../constants/estadistica.contant';


@Component({
  selector: 'app-astro-s-ingreso',
  templateUrl: './astro-s-ingreso.component.html',
  styleUrls: ['./astro-s-ingreso.component.css']
})
export class AstroSIngresoComponent implements OnInit {

  public astro: any;
  public astroCache: any;
  public astroPaginar: any;
  public paginacionInicial: number = 10;
  public paginas: any[]=[];
  public signo: any[]=[];
  public patron: any[] = [];
  public astroEstadistica: any[]=[];
  public raitings: any[]=[];

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: ''
  }
  public cats = [];

  private rangoAnalisis = 30;
  private columnasEnlistadas: any;

  constructor(private webService: WebServicesService) {
    this.inicializarVariables();
  }
  
  ngOnInit(): void {

  }
  
  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/icons/astro-sol.png',
      fondo: true,
      tituloPost: '',
      alturaImagen: '70',
      sombra: 'drop'
    };

    this.cargarAstro();
    this.signo = SIGNOS;
    
  }

  private numerarPatron(col1:any, col2:any, col3:any, col4:any):number{
    let patron = 0;
    
    return patron = +(this.traducirCalificacion(this.devolverRaiting(col1))
            + this.traducirCalificacion(this.devolverRaiting(col2))
            + this.traducirCalificacion(this.devolverRaiting(col3))
            + this.traducirCalificacion(this.devolverRaiting(col4)));

  }

  traducirCalificacion(temperatura: string): string{
    let numero = '';
    if(temperatura === 'frio'){
      numero = '1';
    } else if (temperatura === 'medio'){
      numero = '2'
    } else if (temperatura === 'caliente'){
      numero = '3'
    }
    return numero;
  }

  private analizarEstadistica(){
    if(this.astroPaginar){
      for(let i=0; i < this.astroPaginar.length; i++){
        this.astroEstadistica[i] = {
          fecha: this.astroPaginar[i].fecha,
          sorteo: this.astroPaginar[i].sorteo,
          signo: {
            signo: this.astroPaginar[i].signo,
            nUno: this.calificar('cinco', i, 1),
            nDos: this.calificar('cinco', i, 2),
            nTres: this.calificar('cinco', i, 3),
            nCuatro: this.calificar('cinco', i, 4),
            nCinco: this.calificar('cinco', i, 5),
            nSeis: this.calificar('cinco', i, 6),
            nSiete: this.calificar('cinco', i, 7),
            nOcho: this.calificar('cinco', i, 8),
            nNueve: this.calificar('cinco', i, 9),
            nDiez: this.calificar('cinco', i, 10),
            nOnce: this.calificar('cinco', i, 11),
            nDoce: this.calificar('cinco', i, 12)
          },
          uno: {
            
            numero: this.astroPaginar[i].uno,
            nUno: this.calificar('uno', i, 1),
            nDos: this.calificar('uno', i, 2),
            nTres: this.calificar('uno', i, 3),
            nCuatro: this.calificar('uno', i, 4),
            nCinco: this.calificar('uno', i, 5),
            nSeis: this.calificar('uno', i, 6),
            nSiete: this.calificar('uno', i, 7),
            nOcho: this.calificar('uno', i, 8),
            nNueve: this.calificar('uno', i, 9),
            nCero: this.calificar('uno', i, 0)
          },
          dos: {
            numero: this.astroPaginar[i].dos,
            nUno: this.calificar('dos', i, 1),
            nDos: this.calificar('dos', i, 2),
            nTres: this.calificar('dos', i, 3),
            nCuatro: this.calificar('dos', i, 4),
            nCinco: this.calificar('dos', i, 5),
            nSeis: this.calificar('dos', i, 6),
            nSiete: this.calificar('dos', i, 7),
            nOcho: this.calificar('dos', i, 8),
            nNueve: this.calificar('dos', i, 9),
            nCero: this.calificar('dos', i, 0)
          },
          tres: {
            numero: this.astroPaginar[i].tres,
            nUno: this.calificar('tres', i, 1),
            nDos: this.calificar('tres', i, 2),
            nTres: this.calificar('tres', i, 3),
            nCuatro: this.calificar('tres', i, 4),
            nCinco: this.calificar('tres', i, 5),
            nSeis: this.calificar('tres', i, 6),
            nSiete: this.calificar('tres', i, 7),
            nOcho: this.calificar('tres', i, 8),
            nNueve: this.calificar('tres', i, 9),
            nCero: this.calificar('tres', i, 0)
          },
          cuatro: {
            numero: this.astroPaginar[i].cuatro,
            nUno: this.calificar('cuatro', i, 1),
            nDos: this.calificar('cuatro', i, 2),
            nTres: this.calificar('cuatro', i, 3),
            nCuatro: this.calificar('cuatro', i, 4),
            nCinco: this.calificar('cuatro', i, 5),
            nSeis: this.calificar('cuatro', i, 6),
            nSiete: this.calificar('cuatro', i, 7),
            nOcho: this.calificar('cuatro', i, 8),
            nNueve: this.calificar('cuatro', i, 9),
            nCero: this.calificar('cuatro', i, 0)
          },
        } 
      }

      this.astroEstadistica.forEach((element: any, index: number) => {
        this.patron[index] = { index: index, patron: this.numerarPatron(element.uno, element.dos, element.tres, element.cuatro)}
      });

      this.patron = this.patron.sort( (a:any, b:any) => {
        return a.patron - b.patron
      });

      let repetidos: any = {};
      
      this.patron = this.patron.slice(this.patron.length - 60, this.patron.length)

      this.patron.forEach(function(numero){
        repetidos[numero.patron] = (repetidos[numero.patron] || 0) + 1;
      });

      CuatroDigitosPorTresCadena.forEach( (item: any, idx: number)=> {
        this.raitings[idx] = {
          index: idx,
          patron: item.numero,
          raiting: this.returnRaiting(item.numero, repetidos),
          numeros: this.numerosGanadores(item, this.astroEstadistica[this.astroEstadistica.length - 1])
        }
      });

      this.raitings = this.raitings.sort((a:any, b:any) => {
        return b.raiting - a.raiting
      });

      console.log(this.raitings, 'this.raitings');

    }
  }

  private returnRaiting(e:number, grupo: any): number{
    let valor;
    let grupoArray: any[]=[];
    let indices = Object.keys(grupo);
    let valores = Object.values(grupo);
    for(let i=0; i < valores.length; i++){
      grupoArray[i] = { indice: indices[i], valor: valores[i]}
    }

    valor = grupoArray?.find( element => +element.indice === e );
  
    return parseInt(valor? valor.valor:'0')
    
  }

  private cargarAstro(pagina?: any){
    return this.webService.consultarAstro().subscribe( (datos:any) => {
      this.astroPaginar = datos.astro_sol;

      this.columnasEnlistadas = this.enlistarColumnas(datos.astro_sol);
      this.analizarEstadistica();
    });
  }

  private enlistarColumnas(array: any[]) {
    let nUno: any[]= [];
    let nDos: any[]= [];
    let nTres: any[]= [];
    let nCuatro: any[]= [];
    let signo: any[]= [];

    array.forEach((item:any, index:number, array: any[])=>{
      nUno[index] = item.uno;
      nDos[index] = item.dos;
      nTres[index] = item.tres;
      nCuatro[index] = item.cuatro;
      signo[index] = item.signo;
    })
    // console.log(nUno,'nUno');
    return { uno: nUno, dos: nDos, tres: nTres, cuatro: nCuatro, cinco: signo}
  }

  private calificar(columna: string, indice: number, numero: number): string{
    let repetidos = 0;

    let rango = this.columnasEnlistadas[columna].slice(indice - this.rangoAnalisis , indice);

    rango.forEach((element: any) => {
      if(element === numero){
        repetidos++;
      }
    });

    return this.calificado(repetidos);

  }

  private calificado(cantidad: number): string{
    let calificacion = '';
    if(cantidad <= 3){
      calificacion = 'frio';
    } else if (cantidad >= 3 && cantidad <= 5){
      calificacion = 'medio';
    } else if (cantidad >= 5){
      calificacion = 'caliente'
    } else {
      console.log(cantidad, 'CANTIDAD');
    }

    return calificacion;
  }

  public cargarSigno(valor: number): string{
    let signos = SIGNOS;
    return signos[valor - 1];
  }

  public recargaAstro(e: any) {
    this.astro = Object.assign([], e);
  }

  public recibirCantidadElementos(paginado: any){
    this.astroEstadistica = Object.assign([], paginado);
  }

  public devolverRaiting(element: any): string{
    let raiting = ''
    if(element.numero === 1){
      raiting = element.nUno;

    } else if (element.numero === 2) {
      raiting = element.nDos;

    } else if (element.numero === 3) {
      raiting = element.nTres;

    } else if (element.numero === 4) {
      raiting = element.nCuatro;

    } else if (element.numero === 5) {
      raiting = element.nCinco;

    } else if (element.numero === 6) {
      raiting = element.nSeis;

    } else if (element.numero === 7) {
      raiting = element.nSiete;

    } else if (element.numero === 8) {
      raiting = element.nOcho;

    } else if (element.numero === 9) {
      raiting = element.nNueve;

    } else if (element.numero === 0) {
      raiting = element.nCero;

    }

    return raiting;
  }

  public ordenarPatron(array: any){
    array.sort( (a:any, b:any) => {
      return a.patron - b.patron
    })
  }
  
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  numerosGanadores(patron: number, estadoActual: any): any[]{
    console.log(patron, estadoActual);

    let col1 = this.extraerNumeros(estadoActual.uno);
    let col2 = this.extraerNumeros(estadoActual.dos);
    let col3 = this.extraerNumeros(estadoActual.tres);
    let col4 = this.extraerNumeros(estadoActual.cuatro);

    console.log(col1, 'UNO');


    


    return []
  }

  private extraerNumeros(bloque: any): any[]{
    let values = Object.values(bloque)
    let keys = Object.keys(bloque);
    let bloqueCompuesto: any[]=[];
    
    for(let i=0; i < 10; i++){
      bloqueCompuesto[i] = {
        numero: this.traducirNumero(keys[i]),
        calificacion: values[i]
      }
    }
    

    return bloqueCompuesto
  }

  traducirNumero(dato: string):number{
    let numero=0;

    if(dato === 'nUno'){
      numero = 1
    } else if(dato === 'nDos'){
      numero = 2
    } else if(dato === 'nTres'){
      numero = 3
    } else if(dato === 'nCuatro'){
      numero = 4
    } else if(dato === 'nCinco'){
      numero = 5
    } else if(dato === 'nSeis'){
      numero = 6
    } else if(dato === 'nSiete'){
      numero = 7
    } else if(dato === 'nOcho'){
      numero = 8
    } else if(dato === 'nNueve'){
      numero = 9
    } else if(dato === 'nCero'){
      numero = 0
    } else {

    }

    return numero
  }

}
