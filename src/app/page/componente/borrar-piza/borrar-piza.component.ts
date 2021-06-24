import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Piza } from 'src/app/clases/piza';

@Component({
  selector: 'app-borrar-piza',
  templateUrl: './borrar-piza.component.html',
  styleUrls: ['./borrar-piza.component.css']
})
export class BorrarPizaComponent implements OnInit {

  @Input()  pizzaParaBorrar: Piza;
  @Output() eventoBorrarPizza: EventEmitter<Piza> = new EventEmitter<Piza>();
 
  constructor() { }

  ngOnInit(): void {
  }

  borrar(){
    this.eventoBorrarPizza.emit(this.pizzaParaBorrar);
  }

}
