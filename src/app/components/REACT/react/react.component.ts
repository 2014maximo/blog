import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../shared/models/post.model';
import { IndiceDeContenidosModel } from '../../../shared/models/indice.model';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {

  public idPost = '62a96ee3-75c7-4b01-aba7-d963ffd140bb';

  constructor() { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
