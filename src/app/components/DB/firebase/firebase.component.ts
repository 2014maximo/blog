import { Component, OnInit } from '@angular/core';
import { repositorioContenidoImagenes } from 'src/app/constants/globales.constant';
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
  public rutaImagen: string = '';

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.rutaImagen = repositorioContenidoImagenes;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  public copiarAlPortapapeles(cadenaAlclipboard: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = cadenaAlclipboard;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
