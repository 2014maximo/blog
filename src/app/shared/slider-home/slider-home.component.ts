import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { of } from 'rxjs';
import { RUTAS_SLIDES } from '../../constants/sliders.constant';
import { SliderModel } from '../../models/post.model';
import { CATEGORIA } from '../../constants/categoria.constant';

@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.component.html',
  styleUrls: ['./slider-home.component.css']
})
export class SliderHomeComponent implements OnInit {

  public sliders: any;


  constructor() { }

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

    this.sliders = RUTAS_SLIDES;
    let grupo = this.extraerUltimosPost();
    console.log(grupo, 'LOS SLIDERS');
  }

  private extraerUltimosPost(): SliderModel[]{

    let slidersSeleccionados: any[] =[];

    CATEGORIA.forEach((e:any, i:number)=>{
      e.posts.forEach((element:any) => {
        slidersSeleccionados.push(element)
      });
    });

    slidersSeleccionados = slidersSeleccionados.filter((element:any) => 
      element.mostrarEnPostHome
    )

    
    return []
  }

}
