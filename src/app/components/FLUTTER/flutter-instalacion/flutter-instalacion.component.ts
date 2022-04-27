import { Component, OnInit } from '@angular/core';
import { traerPost } from 'src/app/constants/funciones-globales';
import { PostModel } from 'src/app/models/post.model';
import { POSTS } from '../../../constants/post.constant';
import { CategoriaModel, AccordeonModel } from '../../../models/post.model';

@Component({
  selector: 'app-flutter-instalacion',
  templateUrl: './flutter-instalacion.component.html',
  styleUrls: ['./flutter-instalacion.component.css']
})
export class FlutterInstalacionComponent implements OnInit {

  public cabeceraPost = traerPost('flutter-0001', POSTS) || new PostModel;

  public breadcrumb: CategoriaModel = {
    activo: this.cabeceraPost.mostrarBreadcrumb,
    categoria: this.cabeceraPost.categoria,
    colorText: this.cabeceraPost.colorText,
    ruta: this.cabeceraPost.ruta,
  }
  // https://github.com/flutter/flutter/tags (MIRAR LAS VERSIONES DE FLUTTER EN EL GIT)
  public versiones = [
    {
      version: '2.8.1 ',
      cambios: [ 'Build Flutter iOS plugins with all valid architectures (#95293)',
                 'add branch flutter-2.8-candidate.3 to enabled_branches in .ci.yaml',
                 'Update Engine revision to 890a5fca2e34db413be624fc83aeea8e61d42ce6 for stable release 2.8.1'
                ],
      link: 'https://storage.googleapis.com/flutter_infra_release/releases/stable/windows/flutter_windows_2.8.1-stable.zip'   
    },
    
  ]


  constructor() {
    this.inicializarVariables();
  }
  private inicializarVariables() {
    
  }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }


}
