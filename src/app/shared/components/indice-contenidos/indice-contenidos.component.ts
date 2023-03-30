import { Component, OnInit, Input } from '@angular/core';
import { IndiceDeContenidosModel } from 'src/app/models/indice.model';
import { DatosPost, CategoriaPostModel, SubCategoriaModel } from '../../../models/categorias.model';
import { CATEGORIA } from '../../../constants/categorias/categoria.constant';

@Component({
  selector: 'app-indice-contenidos',
  templateUrl: './indice-contenidos.component.html',
  styleUrls: ['./indice-contenidos.component.css']
})
export class IndiceContenidosComponent implements OnInit {

  @Input() indice: IndiceDeContenidosModel [] = [
    {
      nombre: '',
      posicion: '',
      ruta: '',
      colorFondo: '',
      color: '',
      estado: ''
    },
  ];

  @Input() categoria: string = '';
  @Input() contenido: string = '';
  @Input() clase: string = '';
  
  public posts: DatosPost[] = [];
  public subcategorias: SubCategoriaModel[] = [];

  constructor() { }

  ngOnInit(): void {
    CATEGORIA.forEach(( p: CategoriaPostModel ) => {
      if(p.nombre.includes(this.categoria)){this.posts = p.post; this.subcategorias = p.subcategorias}
    });

    switch(this.contenido){
      case 'subcategorias':
        this.cargarSubcategorias();
        break;
      
      /* case 'categorias': */
        
    }
  }

  private cargarSubcategorias(){
    this.subcategorias.forEach(( c: SubCategoriaModel, i:number ) => {
      c.post.forEach((p: DatosPost, idx: number) => {
        this.indice[idx].color = p.estilos.color;
        this.indice[idx].colorFondo = p.estilos.colorFondo;
        this.indice[idx].estado = p.estado;
        this.indice[idx].nombre = p.nombre;
        this.indice[idx].posicion = p.posicion;
        this.indice[idx].ruta = p.ruta;
      })
    });
  }

  scroll(id: string) {
    let el = document.getElementById(id);
    // @ts-ignore: Object is possibly 'null'.
    el.scrollIntoView();
  }

  public validaEstado(estado: string):boolean{
    return estado === 'activo'? true : false
  }

  public filtrarIndiceActivo(grupo: IndiceDeContenidosModel[]):IndiceDeContenidosModel[]{
    return grupo.filter( publi => publi.estado === 'activo' )
  }

}
