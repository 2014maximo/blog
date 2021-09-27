import { Component, OnInit, Input } from '@angular/core';
import { AccordeonPostModel, ObjectAccordeonPostModel, AccordeonModel } from '../../models/post.model';

@Component({
  selector: 'app-accordeon',
  templateUrl: './accordeon.component.html',
  styleUrls: ['./accordeon.component.css']
})
export class AccordeonComponent implements OnInit {

  @Input() contenido: AccordeonModel [] = [
    {
      elemento:'',
      nClass: '',
      contenido: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public abrirContenido(nombreClase: string){
    //let shand = document.getElementsByClassName('s-hand') as HTMLCollectionOf<HTMLElement>;
    let shand = document.getElementsByClassName(nombreClase) as HTMLCollectionOf<HTMLElement>

    if (shand.length != 0) {
      shand[0].style.display = 'block';
    }
  }

}
