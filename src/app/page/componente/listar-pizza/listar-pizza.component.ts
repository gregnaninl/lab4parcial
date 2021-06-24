import { Component, Input, OnInit, Output,EventEmitter  } from '@angular/core';
import { Piza } from 'src/app/clases/piza';

@Component({
  selector: 'app-listar-pizza',
  templateUrl: './listar-pizza.component.html',
  styleUrls: ['./listar-pizza.component.css']
})
export class ListarPizzaComponent implements OnInit {

  @Input() listado: Piza [];
  @Output() eventoElegirPizza: EventEmitter<any> = new EventEmitter<any>();
  @Output() eventoSacarPizza: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }


  seleccioneUno(elegida: Piza){
    this.eventoElegirPizza.emit(elegida);
  }

  borrar(elegida: Piza){
    this.eventoSacarPizza.emit(elegida);
  }

}
