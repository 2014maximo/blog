import { Component, Input, OnInit } from '@angular/core';
import { CATEGORIA } from '../../../constants/categorias/categoria.constant';
import { DatosPost, CategoriaPostModel, SubCategoriaModel } from '../../models/categorias.model';
import { datosCategoria } from '../../constants/funciones/funciones-globales';
import { TraduccionService } from '@app/services/traduccion.service';
import { firstValueFrom } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-galeria-post',
  templateUrl: './galeria-post.component.html',
  styleUrls: ['./galeria-post.component.css']
})
export class GaleriaPostComponent implements OnInit {

  @Input() itemIniciales: number = 0;

  public categorias = CATEGORIA
  public grupoGaleria: any[] = [];
  public postPorPantalla: string[] = ['9','18'];
  public todosLosPost: DatosPost[] = [];
  public postPaginar: DatosPost[] = [];
  public ultimosPost: any[] = [];
  public anchoPantalla = window.innerWidth;

  constructor(public translate: TranslateService, private traduccion: TraduccionService) { }

  ngOnInit(): void {
    this.agruparPost();
    this.traduccion.cambioIdioma$.subscribe((idioma) => {
      this.agruparPost();
		});
  }

  public cargarGrupoGaleria():any[] {
    let grupo: any[] = [];
    return grupo
  }

  private agruparPost(){
    this.todosLosPost = this.traduccion.todosLosPostTraducidos;
/*     this.categorias.forEach( (e:CategoriaPostModel, i:number)=>{
      e.post.forEach((element:any) => {
        this.todosLosPost.push(element);
      });
      e.subcategorias.forEach((s:SubCategoriaModel) => {
        s.post.forEach((p: DatosPost) => {
          this.todosLosPost.push(p);
        });
      });
    });

    this.todosLosPost = Object.assign([], this.retirarPostsPrincipalCategoria(this.todosLosPost)); */
    setTimeout(()=>{
      this.todosLosPost = this.ordenarPostPorFecha(this.todosLosPost);
      console.log(this.todosLosPost, 'TODOS LOS POSTS');
    },0)
  }

  private retirarPostsPrincipalCategoria(grupo:DatosPost[]):DatosPost[]{
    return grupo.filter( element => 
      element.mostrarEnPostHome
    )
  }

  private ordenarPostPorFecha(grupo: DatosPost[]):DatosPost[]{
    const compararFechas = (a:any, b:any) => {
      const AFecha = a.fechaActualizacion?a.fechaActualizacion:a.fechaCreacion;
      const BFecha = b.fechaActualizacion?b.fechaActualizacion:b.fechaCreacion;
      const fechaA = new Date(AFecha).getTime();
      const fechaB = new Date(BFecha).getTime();

      return fechaB - fechaA;
    }; 
    return grupo.sort(compararFechas);
  }


  public convertirFechaANumero(fecha:string):number{
    let numero = +(new Date(fecha).getTime());
    return +numero;
  }

  public tipoSombra(path: string):string{
    let sombra='marcoFoto shadow-two';

    if(path.includes('png')){
      sombra = 'drop'
    }
    return sombra
  }

  public recibirCantidadElementos(e:any){
    this.postPaginar = Object.assign([], e);
  }

  public retornarDatoCategoria(categoria: string, referencia: number): string{
    return datosCategoria(categoria,referencia);
  }

  public referenciaImagen(valor: string, contenido: string):string{
    let valorDefecto = valor;

    if(contenido){
      valorDefecto = contenido;
    }
    return valorDefecto;
  }


}
