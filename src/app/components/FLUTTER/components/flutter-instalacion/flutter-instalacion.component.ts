import { Component, OnInit } from '@angular/core';
import { copiarAlPortapapeles, traerPost } from '@app/shared/constants/funciones/funciones-globales';
import { PostModel } from '@shared/models/post.model';
import { POSTS } from '@constants/post.constant';
import { CategoriaModel } from '@shared/models/post.model';

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
    ruta: this.cabeceraPost.categoria,
  }
  // https://github.com/flutter/flutter/tags (MIRAR LAS VERSIONES DE FLUTTER EN EL GIT)
  public versiones = [
    {
      version: '2.8.1 ',
      cambios: [ 'Construir los plugins de Flutter iOS con todas las arquitecturas válidas (#95293) ',
                 'Añadir la rama flutter-2.8-candidate.3 a enabled_branches en .ci.yaml ',
                 'Actualizar la revisión del motor a 890a5fca2e34db413be624fc83ae8e61d42ce6 para la versión estable 2.8.1'
                ],
      link: 'https://storage.googleapis.com/flutter_infra_release/releases/stable/windows/flutter_windows_2.8.1-stable.zip'   
    },
    
  ];

  public comandos = [
    {
      comando: 'flutter downgrade 2.8.1',
      observacion: 'bajar la versión de FLUTTER'
    },
    {
      comando: 'flutter doctor -v',
      observacion: 'Muestra las versiones y la ruta de los componentes que operan con FLUTTER'
    },
  ]


  constructor() {
    this.inicializarVariables();
  }
  private inicializarVariables() {
    
  }

  ngOnInit(): void {
  }

  public copiarAlPortapapeles(cadenaAlclipboard: string) {
    copiarAlPortapapeles(cadenaAlclipboard);
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }


}
