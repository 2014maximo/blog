import { Component, Input, OnInit, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.css']
})
export class PaginadorComponent implements OnInit {

  @Input() public contenedor: any[] = [];
  @Input() public itemIniciales: number = 0;
  @Output() paginados: EventEmitter<any> =  new EventEmitter();
  
  public totalPaginas: any[] = [];
  public contenedorCache: any[] = [];


  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      if(this.contenedor){
        this.calcularPaginas(this.itemIniciales);
        this.paginados.emit(this.totalPaginas[0].contenido)
      }
    }, 700);
  }

  public cargarCantidadElementos(e: any, pagina: number){
    this.calcularPaginas(+e.target.value);
    this.paginados.emit(this.totalPaginas[pagina].contenido);
  }

  private calcularPaginas(cantElementos: number){
    this.totalPaginas = [];
    let contador = 0;
    // let cantPaginas = Math.ceil(this.contenedor.length / cantElementos);
    for(let i = 0; i < this.contenedor.length; i += cantElementos){
      this.contenedorCache = this.contenedor;
      this.totalPaginas[contador] = {
        pagina: contador,
        contenido: this.contenedorCache.slice((contador * cantElementos), (contador + 1) * cantElementos)
      }
      contador++;
    }
  }

  public cargarPagina(pagina: number){
    this.paginados.emit(this.totalPaginas[pagina].contenido);
  }
  

}
