import { Component, Input, OnInit } from '@angular/core';
import { HeaderPostModel } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-header-post',
  templateUrl: './header-post.component.html',
  styleUrls: ['./header-post.component.css']
})
export class HeaderPostComponent implements OnInit {

  @Input() cabecera: HeaderPostModel = {
    rutaImagen: '',
    fondo:  false,
    tituloPost: '',
    alturaImagen: '',
    sombra: ''

  };

  constructor() {
  }

  ngOnInit(): void {
  }


}
