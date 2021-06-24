import { Piza } from "./piza";
import { Repartidor } from "./repartidor";

export class Pedido {

    id!: string;
    repartidor!: Repartidor;
    pizzas! : Piza[] ;
    precio! : number;

}