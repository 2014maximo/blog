import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electron',
  templateUrl: './electron.component.html',
  styleUrls: ['./electron.component.css']
})
export class ElectronComponent implements OnInit {

  public idPost = '1bbe7bbd-9f75-44da-8165-a5fde2070e2b';

  constructor() { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
