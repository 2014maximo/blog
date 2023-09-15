import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.component.html',
  styleUrls: ['./wordpress.component.css']
})
export class WordpressComponent implements OnInit {

  public idPost = '66418d5a-10b3-47e4-8f6d-fe527c5c53af';

  constructor() { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
