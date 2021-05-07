import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import Swal from 'sweetalert2';
import { Repartidor } from '../clases/repartidor';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private actorCollection!: AngularFirestoreCollection<Repartidor>;

  constructor( private afs: AngularFirestore) {
    this.actorCollection= afs.collection<Repartidor>('repartidores');
   }


  async GuardarEmpleado(nuevoActor: Repartidor ): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = this.afs.createId();
        const data = { id, ...nuevoActor};
        const result = this.actorCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        console.log(error);        
        reject(error.message);
      }
    });
  }
 


  public traerTodos(): AngularFirestoreCollection<Repartidor> {
    return this.actorCollection;
}

}
