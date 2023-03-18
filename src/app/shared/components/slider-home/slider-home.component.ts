import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { of } from 'rxjs';
import { RUTAS_SLIDES } from '../../../constants/sliders.constant';
import { SliderModel } from '../../../models/post.model';
import { CATEGORIA } from '../../../constants/categorias/categoria.constant';
import { DatosPost, ImgSlider, CategoriaPostModel } from '../../../models/categorias.model';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.component.html',
  styleUrls: ['./slider-home.component.css']
})
export class SliderHomeComponent implements OnInit {

  public sliders: any;
  public categoria: CategoriaPostModel[] = CATEGORIA as [];

  constructor(private ruta: Router) { }

  ngOnInit(): void {
    this.InicializarVariables();
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 2800,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    autoplay: true,
    autoplaySpeed: 2800,
    autoplayTimeout: 15000,
    nav: false
  }

  private InicializarVariables(){

    this.sliders = this.extraerUltimosPost();
    let grupo = this.extraerUltimosPost();

  }

  private extraerUltimosPost(): SliderModel[]{

    let slidersSeleccionados: any[] =[];
    let grupoSliders: SliderModel[] = [];
    let incremento:number = 0;

    CATEGORIA.forEach((e:CategoriaPostModel, i:number)=>{
      e.post.forEach((element:any) => {
        slidersSeleccionados.push(element)
      });
    }); // SE EXTRAEN LOS POST DEL ÁRBOL

    slidersSeleccionados = slidersSeleccionados.filter((element:any) => 
      element.mostrarEnPostHome
    );// SE RETIRAN LOS POST CATEGORIA

    slidersSeleccionados.sort( (a:DatosPost, b:DatosPost) =>  
      this.convertirFechaANumero(b.fechaActualizacion) - this.convertirFechaANumero(a.fechaActualizacion)
    );// SE ORDENAN POR FECHA ASCENDENTE


    for(let i=0; i < slidersSeleccionados.length; i++){
      if(slidersSeleccionados[i].imgSlider){
        grupoSliders.push(slidersSeleccionados[i].imgSlider)
      }
    }
    
    return grupoSliders
  }

  public convertirFechaANumero(fecha:string):number{
    let numero = +(new Date(fecha).getTime());
    return +numero;
  }

  irAlPath(path: string){
    this.ruta.navigate(['/',path]);
  }

}
