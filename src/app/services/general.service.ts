import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {


  constructor(private firestore: AngularFirestore) {}

/*   pruebaCarga(lista: ListContenidoGeneral): Promise<any>{
    return this.firestore.collection('listas').add(lista);
  } */
}
