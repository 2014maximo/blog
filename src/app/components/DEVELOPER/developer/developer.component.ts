import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../shared/models/post.model';
import { IndiceDeContenidosModel } from '../../../shared/models/indice.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  public idPost = '441cab09-256e-446f-bb2c-f017dd6d217b';

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
  }


  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}
