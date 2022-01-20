import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: 'assets/img/icons/firebase.png',
    alturaImagen: '100',
    fondo: true,
    tituloPost: '',
    sombra: 'drop'
  }

  constructor() { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
