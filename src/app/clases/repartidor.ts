import { Pais } from "./pais";

export class Repartidor {
    dni : number; 
    nombre: string;
    edad: number;
    capacidad: number;
    pais : Pais = new Pais;
    unidad: boolean;

}