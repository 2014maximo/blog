import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


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

  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.inicializarVariables();
    this.items = firestore.collection('estadisticas').valueChanges();
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


  }

/*   public crearLista(){
    let lista: ListContenidoGeneral;
    lista = {
      dato1: 'DATO DE REFERENCIA1',
      dato2: 'DATO DE REFERENCIA2',
      dato3: 'DATO DE REFERENCIA3',
      dato4: 'DATO DE REFERENCIA4'
    }
    this.generalService.pruebaCarga(lista).then(() =>{
      console.log('SE GUARDO UN REGISTRO');
    }, error => {
      console.log(error);
    })
  } */


  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
