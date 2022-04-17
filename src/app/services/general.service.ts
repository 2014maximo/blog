import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private firestore: AngularFirestore) {}

  async create(collection: string, data: any){
    try {
      return await this.firestore.collection(collection).add(data);
    }catch(error){
      console.error(error);
      return null
    }
  }

  async getForms(collection: string){
    try {
      return await this.firestore.collection(collection).snapshotChanges();
    } catch(error){
      console.error(error);
      return null
    }
  }

  async getByIdForms(collection: string, id:any){
    try {
      return await this.firestore.collection(collection).doc(id).get();
    } catch(error){
      console.error(error);
      return null
    }
  }

  async delete(collection: string, id:any){
    try {
      return await this.firestore.collection(collection).doc(id).delete();
    } catch(error){
      console.error(error);
      return null
    }
  }
  async update(collection: string, id:any, dato: any){
    try {
      return await this.firestore.collection(collection).doc(id).set(dato);
    } catch(error){
      console.error(error);
      return null
    }
  }


}
