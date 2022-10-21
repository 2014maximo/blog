import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { WebServicesService } from '../../../services/web-services.service';


@Component({
  selector: 'app-astro-s-ingreso',
  templateUrl: './astro-s-ingreso.component.html',
  styleUrls: ['./astro-s-ingreso.component.css']
})
export class AstroSIngresoComponent implements OnInit {

  public astro: any;
  public astroCache: any;
  public astroPaginar: any;
  public paginacionInicial: number = 10;
  public paginas: any[]=[];

  private totalRegistros: number = 0;

  public cabeceraPost: HeaderPostModel = {
    rutaImagen: '',
    alturaImagen: '',
    fondo: false,
    tituloPost: ''
  }
  public cats = [];
  constructor(private webService: WebServicesService) {
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

  private cargarAstro(pagina?: any){
    return this.webService.consultarAstro().subscribe( (datos:any) => {
      this.astroPaginar = datos.astro_sol;
    });
  }

  public cargarSigno(valor: number): string{
    let signos = ['Aries','Tauro','Géminis','Cáncer','Leo','Virgo','Libra','Escorpio','Sagitario','Capricornio','Acuario','Piscis'];
    return signos[valor - 1];
  }

  public recargaAstro(e: any) {
    this.astro = Object.assign([], e);
  }

  public recibirCantidadElementos(paginado: any){
    this.astro = Object.assign([], paginado);
  }

  
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
