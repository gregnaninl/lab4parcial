import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Piza } from 'src/app/clases/piza';
import { PizzaService } from 'src/app/servicio/pizza.service';

@Component({
  selector: 'app-tabla-pizzas',
  templateUrl: './tabla-pizzas.component.html',
  styleUrls: ['./tabla-pizzas.component.css']
})
export class TablaPizzasComponent implements OnInit {

  lista : any;
  todas :any;
  listadoPizzas:Piza[];
  
  @Input() listados : Piza[];
  @Output() eventoCargarPizza: EventEmitter<Piza>= new EventEmitter<Piza>();
  

  constructor(private pizzaSvc : PizzaService) { }

  ngOnInit(): void {
    this.trarTodo();
  }

  trarTodo(){
    this.pizzaSvc.traerTodos().valueChanges().subscribe(
    (res)=>{
      this.todas = res;
      this.listadoPizzas= this.todas.filter(dato => {
            
        return dato.estado== true  ;
       });;
    }
    );
   // console.log(this.listadoDeTablaPeliculas);
  }

  cargarPizza(una  : Piza){
    let indice = this.listados.indexOf(una); // obtenemos el indice
    console.log(indice);
  this.listados.splice(indice, 1);
  //console.log(this.listadoPizzas);
  this.eventoCargarPizza.emit(una);  

  
  }

}
