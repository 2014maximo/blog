import { Component, OnInit, Input } from '@angular/core';
import { postActual, textoAFecha, datosCategoria } from 'src/app/shared/constants/funciones/funciones-globales';
import { PostModel } from '../../../models/post.model';
import { DatosPost } from '../../../models/categorias.model';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {
  
  @Input() idPublicacion: string = '';
  @Input() cabecera: any;

  public encabezado = new PostModel(); 

  constructor() { }

  ngOnInit(): void {
    this.inicializarVariables();
  }

  private inicializarVariables(){
    if(this.idPublicacion){
      let publicacion: DatosPost[] = postActual(this.idPublicacion);
      this.encabezado = {
        alturaImagen: '40',
        categoria: publicacion[0].categoria,
        colorText: publicacion[0].estilos.color,
        fechaActualizacion: textoAFecha(publicacion[0].fechaActualizacion),
        fechaCreacion: textoAFecha(publicacion[0].fechaCreacion),
        id_post: publicacion[0].id,
        incluirFondo: true,
        mostrarBreadcrumb: true,
        nombre: publicacion[0].nombre,
        ruta: publicacion[0].ruta,
        rutaImagen: publicacion[0].imgHorizontal,
        sombra: '',
        descripcion: publicacion[0].descripcion
      }
    }
  }

  public extraerDatoCategoria(categoria: string, referencia: number):any{
    return datosCategoria(categoria, referencia)
  }

  public fechaAString(fecha: Date): string{
    return new Date(fecha).toISOString().slice(0,10);
  }

}
