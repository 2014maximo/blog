import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { EstadisticaService } from '../../../services/estadistica.service';
import { WebServicesService } from '../../../services/web-services.service';
import { AstroSolModel } from '../../../models/web-service.model';


@Component({
  selector: 'app-astro-s-ingreso',
  templateUrl: './astro-s-ingreso.component.html',
  styleUrls: ['./astro-s-ingreso.component.css']
})
export class AstroSIngresoComponent implements OnInit {

  public astro: any;
  public astroCache: any;
  public paginacion: number = 50;

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: ''
  }
  public cats = [];
  constructor(private firestoreService: EstadisticaService, private webService: WebServicesService) {
    this.inicializarVariables();
  }
  
  ngOnInit(): void {
  }
  
  private inicializarVariables() {
    this.cabeceraPost = {
      rutaImagen: 'assets/img/icons/astro-sol.png',
      fondo: true,
      tituloPost: '',
      alturaImagen: '150',
      sombra: 'drop'
    };

    this.cargarAstro();

  }

  private cargarAstro(){
    return this.webService.consultarLoterias().subscribe( (datos:any) => {
      let total = datos.astro_sol.length / this.paginacion;
      this.astro = datos.astro_sol;
      // this.astro = this.astro.length - ()
    });
  }

  public cargarSigno(valor: number): string{

    let signos = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

    return signos[valor - 1];
  }

  public recargaAstro(e: any) {
    this.astro = Object.assign([], e);
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
