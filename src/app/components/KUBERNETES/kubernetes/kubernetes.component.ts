import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { IndiceDeContenidosModel } from '../../../models/indice.model';

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
        rutaExterna: 'javascript-propiedades',
        fondo: 'bg-Kubernetes',
        colorTexto: 'text-light',
        activo: true
      },
      {
        nombre: 'REPASON DOCKER',
        posicion: 'pos-z',
        rutaExterna: 'recorrer-arrays-objetos',
        fondo: 'bg-Kubernetes',
        colorTexto: 'text-light',
        activo: false
      }
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
