import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../shared/models/post.model';
import { IndiceDeContenidosModel } from '../../../shared/models/indice.model';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {

  public idPost = '8825362007';

  constructor() {
  }

  ngOnInit(): void {
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}
