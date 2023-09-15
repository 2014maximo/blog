import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../shared/models/post.model';
import { IndiceDeContenidosModel } from '../../../shared/models/indice.model';

@Component({
  selector: 'app-kotlin',
  templateUrl: './kotlin.component.html',
  styleUrls: ['./kotlin.component.css']
})
export class KotlinComponent implements OnInit {

  public idPost = 'd8b1f94e-7b7e-41c1-a6d7-151e251c2889';

  constructor() { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
