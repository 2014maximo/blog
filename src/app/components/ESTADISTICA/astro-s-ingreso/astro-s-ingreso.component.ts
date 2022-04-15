import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { EstadisticaService } from '../../../services/estadistica.service';


@Component({
  selector: 'app-astro-s-ingreso',
  templateUrl: './astro-s-ingreso.component.html',
  styleUrls: ['./astro-s-ingreso.component.css']
})
export class AstroSIngresoComponent implements OnInit {

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: ''
  }
  public cats = [];
  constructor(private firestoreService: EstadisticaService) {
    this.inicializarVariables();
  }
  
  ngOnInit(): void {
    this.firestoreService.getCats().subscribe( datos => {
      this.cats = [];
      datos.forEach((catData: any) => {
        console.log(catData, 'LO QUE VENGA');

      })
    })
  }
  
  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/icons/astro-sol.png',
      fondo: true,
      tituloPost: '',
      alturaImagen: '150',
      sombra: 'drop'
    };

  }


  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
