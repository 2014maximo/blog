import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  constructor(private firestore: AngularFirestore) {

  }

  async create(collection: string, data: any){

    try {
      return await this.firestore.collection(collection).add(data);
    }catch(error){
      console.error(error);
      return null
    }
  }

  async getForms(collection: any){
    console.log('DENTRO DEL SERVICIO ANTES DEL TRY');
    try {
      console.log('DENTRO DEL SERVICIO DENTRO DE TRY ANTES DE USAR LOS MODULOS FIRESTORE');
      return await this.firestore.collection(collection).snapshotChanges();
    } catch(error){
      console.error(error);
      return null
    }
  }

  getQuicklyForms(collection: string){
    return this.firestore.collection(collection).snapshotChanges();
  }

  async getByIdForms(collection: any, id:any){
    try {
      return await this.firestore.collection(collection).doc(id).get();
    } catch(error){
      console.error(error);
      return null
    }
  }

  async delete(collection: any, id:any){
    try {
      return await this.firestore.collection(collection).doc(id).delete();
    } catch(error){
      console.error(error);
      return null
    }
  }
  async update(collection: any, id:any, dato: any){
    try {
      return await this.firestore.collection(collection).doc(id).set(dato);
    } catch(error){
      console.error(error);
      return null
    }
  }


}
