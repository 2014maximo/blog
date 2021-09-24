import { Component, OnInit, Input } from '@angular/core';
import { AccordeonPostModel } from '../../models/post.model';

@Component({
  selector: 'app-accordeon',
  templateUrl: './accordeon.component.html',
  styleUrls: ['./accordeon.component.css']
})
export class AccordeonComponent implements OnInit {

  @Input() contenido: AccordeonPostModel = {
    idHeading: '',
    idCollapse: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
