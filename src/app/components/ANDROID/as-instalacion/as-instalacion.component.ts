import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';

@Component({
  selector: 'app-as-instalacion',
  templateUrl: './as-instalacion.component.html',
  styleUrls: ['./as-instalacion.component.css']
})
export class AsInstalacionComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: true,
    tituloPost: 'ANDROID STUDIO INSTALACIÓN',
    sombra: 'drop'
  }

  constructor() { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
