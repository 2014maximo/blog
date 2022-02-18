import { Component, OnInit } from '@angular/core';
import { HeaderPostModel } from '../../../models/post.model';
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


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

  
  constructor() {
    this.inicializarVariables();
  }
  
  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: "AIzaSyCSZ_jjFVuKWQV-MN1y11Jns6LKLX6vtA4",
      authDomain: "estadistica-e5eeb.firebaseapp.com",
      databaseURL: "https://estadistica-e5eeb.firebaseio.com",
      projectId: "estadistica-e5eeb",
      storageBucket: "estadistica-e5eeb.appspot.com",
      messagingSenderId: "64729521444",
      appId: "1:64729521444:web:ca61334b52ca487072e7b1"
    };
    const app = initializeApp(firebaseConfig);


    console.log(app, 'MIREMOS A VER QUE LLEGA');
    const db = getFirestore(app);

// Get a list of cities from your database
let fechas = getCities(db);
async function getCities(db:any) {
  const citiesCol = collection(db, 'fecha');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
console.log(fechas, 'LISTA DE CITIES');

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
