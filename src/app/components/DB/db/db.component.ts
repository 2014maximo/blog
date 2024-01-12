import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../shared/models/post.model';
import { IndiceDeContenidosModel } from '../../../shared/models/indice.model';

@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.css']
})
export class DbComponent implements OnInit {

  public idPost = '6569240889';

  constructor() { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
