import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kubernetes',
  templateUrl: './kubernetes.component.html',
  styleUrls: ['./kubernetes.component.css']
})
export class KubernetesComponent implements OnInit {

  public idPost = 'b4b3eae9-5f63-4d8e-851b-57bb6982a919';

  constructor() { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
