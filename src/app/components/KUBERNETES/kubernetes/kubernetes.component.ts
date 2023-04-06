import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../shared/models/post.model';
import { IndiceDeContenidosModel } from '../../../shared/models/indice.model';

@Component({
  selector: 'app-kubernetes',
  templateUrl: './kubernetes.component.html',
  styleUrls: ['./kubernetes.component.css']
})
export class KubernetesComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
  }

  public indiceKubernetes: IndiceDeContenidosModel [] = [];
  public claseKubernetes = '';

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/categorias/kubernetes.png',
      fondo: true,
      tituloPost: '',
      alturaImagen: '150',
      sombra: 'drop'
    };

    this.claseKubernetes = 'mt-2';

    this.indiceKubernetes = [
      {
        nombre: 'PROPIEDADES',
        posicion: 'pos-z',
        ruta: 'javascript-propiedades',
        colorFondo: 'bg-Kubernetes',
        color: 'text-light',
        estado: 'activo'
      },
      {
        nombre: 'REPASON DOCKER',
        posicion: 'pos-z',
        ruta: 'recorrer-arrays-objetos',
        colorFondo: 'bg-Kubernetes',
        color: 'text-light',
        estado: 'inactivo'
      }
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
