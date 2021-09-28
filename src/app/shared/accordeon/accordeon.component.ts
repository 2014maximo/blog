import { Component, OnInit, Input } from '@angular/core';
import { fromEvent } from 'rxjs';
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

  public ocultar: boolean = false;

  constructor() { }

  ngOnInit(): void {
    const clicks = fromEvent(document, 'click');
    clicks.subscribe(x => console.log(x));
  }

/*   public abrirContenido(nombreClase: string){
    //let shand = document.getElementsByClassName('s-hand') as HTMLCollectionOf<HTMLElement>;
    let shand = document.getElementsByClassName(nombreClase) as HTMLCollectionOf<HTMLElement>

    console.log(shand, 'SHAND');
    if (shand.length != 0) {
      
      shand[0].style.display = 'block';
    }
  } */

  public abrirContenido(mostrar: any){
    return !mostrar;
  }

}
