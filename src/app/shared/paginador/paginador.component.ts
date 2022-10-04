import { Component, Input, OnInit, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.css']
})
export class PaginadorComponent implements OnInit {

  @Input() contenido: any [] = [];
  @Input() cantidad: number = 0;
  @Output() paginado = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

}
