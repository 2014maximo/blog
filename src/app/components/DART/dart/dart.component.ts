import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../shared/models/post.model';
import { IndiceDeContenidosModel } from '../../../shared/models/indice.model';

@Component({
  selector: 'app-dart',
  templateUrl: './dart.component.html',
  styleUrls: ['./dart.component.css']
})
export class DartComponent implements OnInit {

  public idPost = '2288525419';

  constructor() { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
