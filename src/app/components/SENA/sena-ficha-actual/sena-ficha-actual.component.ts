import { Component, OnInit } from '@angular/core';
import { HeaderPostModel, CategoriaModel } from '../../../shared/models/post.model';
import { repositorioContenidoImagenes } from '../../../constants/generales/globales.constant';
import { copiarAlPortapapeles } from 'src/app/shared/constants/funciones/portapapeles';


@Component({
  selector: 'app-sena-ficha-actual',
  templateUrl: './sena-ficha-actual.component.html',
  styles: [
  ]
})
export class SenaFichaActualComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: '',
    sombra: ''
  }

  public urlImg: string = repositorioContenidoImagenes;

  public profes: any;
  public rutaImagen: string = '';

  public breadcrumb: CategoriaModel = {
    activo: true,
    categoria: 'SENA',
    colorText: 'tc-orange-three',
    ruta: 'sena'
  }

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables(){
    this.cabeceraPost = {
      rutaImagen: 'assets/img/categorias/sena.png',
      fondo: true,
      tituloPost: '7622732-734',
      alturaImagen: '300',
      sombra: 'drop'
    };

    this.profes = {
      nicth: 'nicth',
      nicthphp: 'nicth-php',
      nicthjava: 'nicth-java',
      ingo: 'ingo',
      yhoan: 'yhoan',
      lizeth: 'lizeth',
      jorge: 'jorge',
      juan: 'juan'
    }


    this.rutaImagen = repositorioContenidoImagenes;
  }

  scrolls(el: HTMLElement) {
    el.scrollIntoView();
  }

  scroll(id: string) {
    let el = document.getElementById(id);
    // @ts-ignore: Object is possibly 'null'.
    el.scrollIntoView();
  }

  public copiarPortapapeles(cadenaAlclipboard: string) {
    copiarAlPortapapeles(cadenaAlclipboard);
  }

}
