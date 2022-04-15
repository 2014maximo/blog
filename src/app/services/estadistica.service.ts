import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class EstadisticaService {

  private url = 'https://estadistica-e5eeb.firebaseio.com';

  constructor( private http: HttpClient, private firestore: AngularFirestore ) { }

  public getCats() {
    return this.firestore.collection('form-contact').snapshotChanges();
  }
}
