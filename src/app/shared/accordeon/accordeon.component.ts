import { Component, OnInit, Input } from '@angular/core';
import { AccordeonPostModel, ObjectAccordeonPostModel } from '../../models/post.model';

@Component({
  selector: 'app-accordeon',
  templateUrl: './accordeon.component.html',
  styleUrls: ['./accordeon.component.css']
})
export class AccordeonComponent implements OnInit {

  @Input() contenido: ObjectAccordeonPostModel = {
    dataParent: '',
    content: []
  };

  constructor() { }

  ngOnInit(): void {
  }

}
