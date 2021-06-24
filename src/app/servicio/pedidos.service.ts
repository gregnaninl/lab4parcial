import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Pedido } from '../clases/pedido';
import { Piza } from '../clases/piza';
@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private pedidoCollection!: AngularFirestoreCollection<Pedido>;

  constructor( private afs: AngularFirestore) {
    this.pedidoCollection= afs.collection<Pedido>('Pedidos');
   }

  async Guardar(nueva: Pedido ): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = this.afs.createId();
        const data = { id, ...nueva};
        const result = this.pedidoCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        console.log(error);        
        reject(error.message);
      }
    });
  }
 


  public traerTodos(): AngularFirestoreCollection<Pedido> {
    return this.pedidoCollection;
}

public update(pizza : Piza){ 
  console.log(pizza) 
  let uid=pizza.id;
  this.pedidoCollection.doc(uid).update(pizza);  
  
}
}
