import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../shared/models/post.model';
import { IndiceDeContenidosModel } from '../../../shared/models/indice.model';

@Component({
  selector: 'app-android',
  templateUrl: './android.component.html',
  styles: [
  ]
})
export class AndroidComponent implements OnInit {

  public idPost: string = '2a988b8d-2e63-48b5-baf4-767ddcf5f747'

  constructor() {}

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
