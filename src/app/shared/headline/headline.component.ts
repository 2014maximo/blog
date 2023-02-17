import { Component, OnInit, Input } from '@angular/core';
import { PostModel } from '../../models/post.model';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {
  

  @Input() cabecera: PostModel = {
    nombre: '',
    id_post: '',
    categoria: '',
    fechaActualizacion: new Date(2020,7,30),
    fechaCreacion: new Date(2020,7,30),
    incluirFondo: false,
    ruta: '',
    rutaImagen: '',
    sombra: '',
    alturaImagen: '',
    mostrarBreadcrumb: false,
    colorText: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
