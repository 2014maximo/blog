import { Component, OnInit, Input } from '@angular/core';
import { CategoriaModel } from '../../models/post.model';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent implements OnInit {

  @Input() categoria: CategoriaModel = {
    activo: false,
    categoria: '',
    ruta: '',
    colorText: ''
  };

  constructor() {
    
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {

  }

}
