import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Piza } from '../clases/piza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private pizzaCollection!: AngularFirestoreCollection<Piza>;

  constructor( private afs: AngularFirestore) {
    this.pizzaCollection= afs.collection<Piza>('Pizzas');
   }

  async Guardar(nueva: Piza ): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = this.afs.createId();
        const data = { id, ...nueva};
        const result = this.pizzaCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        console.log(error);        
        reject(error.message);
      }
    });
  }
 


  public traerTodos(): AngularFirestoreCollection<Piza> {
    return this.pizzaCollection;
}

public update(pizza : Piza){ 
  console.log(pizza) 
  let uid=pizza.id;
  this.pizzaCollection.doc(uid).update(pizza);  
  
}

}
