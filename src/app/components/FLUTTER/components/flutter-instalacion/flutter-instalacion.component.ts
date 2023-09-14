import { Component, OnInit } from '@angular/core';
import { cargarBreadcrumb, cargarIndice, postActual } from '@app/shared/constants/funciones/funciones-globales';
import { CategoriaModel } from '@shared/models/post.model';
import { IndiceDeContenidosModel } from '@shared/models/indice.model';
import { CategoriaPostModel, DatosPost } from '@shared/models/categorias.model';
import { CATEGORIA } from '@constants/index';

@Component({
  selector: 'app-flutter-instalacion',
  templateUrl: './flutter-instalacion.component.html',
  styleUrls: ['./flutter-instalacion.component.css']
})
export class FlutterInstalacionComponent implements OnInit {

  public idPublicacion = '70d34b42-d1bf-4920-b217-ef6b09ff42d6';
  public indiceTypescript: IndiceDeContenidosModel [] = [];
  public publicacion = new DatosPost();
  public categoria = new CategoriaPostModel();
  public breadcrumb = new CategoriaModel();
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
  }
  ngOnInit(): void {
    this.publicacion = postActual(this.idPublicacion)[0];
    this.categoria = CATEGORIA.filter( e => e.nombre === this.publicacion.categoria)[0];
    this.indiceTypescript = cargarIndice(this.publicacion);
    this.breadcrumb = cargarBreadcrumb(this.publicacion);
  }

  public copiarAlPortapapeles(cadenaAlclipboard: string) {
    this.copiarAlPortapapeles(cadenaAlclipboard);
  }

  public scroll(el: HTMLElement){
    el.scrollIntoView();
  }

}
