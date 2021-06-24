import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Piza } from 'src/app/clases/piza';
import { PizzaService } from 'src/app/servicio/pizza.service';

@Component({
  selector: 'app-tabla-pizzas',
  templateUrl: './tabla-pizzas.component.html',
  styleUrls: ['./tabla-pizzas.component.css']
})
export class TablaPizzasComponent implements OnInit {

  lista : any;
  listadoPizzas:object;

  @Output() eventoCargarPizza: EventEmitter<Piza>= new EventEmitter<Piza>();
  

  constructor(private pizzaSvc : PizzaService) { }

  ngOnInit(): void {
    this.trarTodo();
  }

  trarTodo(){
    this.pizzaSvc.traerTodos().valueChanges().subscribe(
    (res)=>{
      this.listadoPizzas = res;
    }
    );
   // console.log(this.listadoDeTablaPeliculas);
  }

  cargarPizza(una  : Piza){
  this.eventoCargarPizza.emit(una);
  }

}
