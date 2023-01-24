import { Component, OnInit, Input } from '@angular/core';
import { CategoriaModel } from '../../models/post.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CATEGORIA } from '../../constants/categoria.constant';
import { DatosPost } from '../../models/categorias.model';
import { Router } from '@angular/router';
import { busquedaGeneral } from '../../constants/funciones-globales';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent implements OnInit {

  public formBasic: FormGroup;
  public categorias = CATEGORIA;
  public todosLosPost:DatosPost[]=[];
  public mostrarResultados: boolean = false;
  public encontrados :DatosPost[]=[];

  @Input() categoria: CategoriaModel = {
    activo: false,
    categoria: '',
    ruta: '',
    colorText: ''
  };

  constructor(private router: Router) {
    this.inicializarVariables();
    this.formBasic = new FormGroup({
      'busqueda': new FormControl('')})
  }

  ngOnInit(): void {
  }

  private inicializarVariables() {
    this.categorias.forEach( (e:any, i:number)=>{
      e.posts.forEach((element:any) => {
        this.todosLosPost.push(element);
      });
    });
    this.todosLosPost = Object.assign([], this.retirarPostsPrincipalCategoria(this.todosLosPost))

  }

  public buscar(e:any){
    let buscar = this.formBasic.value.busqueda;
    if(e.key && buscar){
      this.mostrarResultados = true;
      this.encontrados = busquedaGeneral(this.todosLosPost, 'titulo', buscar);
    } else {
      this.mostrarResultados = false;
    }
    // console.log(this.formBasic.value.busqueda, 'FORMULARIO');
  }

  private retirarPostsPrincipalCategoria(grupo:DatosPost[]):DatosPost[]{
    return grupo.filter( element => 
      element.mostrarEnPostHome
    )
  }

  public desaparecerTablaBusqueda(){
    setTimeout( ()=>{
      this.mostrarResultados = false;
      this.formBasic.get('busqueda')?.setValue('');
    },2000)
  }

  public irAlPost(post: string){
    console.log(post, 'LO QUE ALCANZA A LLEGAR');
    this.router.navigateByUrl(post);
  }

}
