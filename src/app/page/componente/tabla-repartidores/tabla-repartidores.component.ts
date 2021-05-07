import { Component, Input, OnInit, Output,EventEmitter  } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';

@Component({
  selector: 'app-tabla-repartidores',
  templateUrl: './tabla-repartidores.component.html',
  styleUrls: ['./tabla-repartidores.component.css']
})
export class TablaRepartidoresComponent implements OnInit {

  @Input() listado: Repartidor [];
  @Output() eventoRepartidor: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  seleccioneUno(uno : Repartidor){
    // console.info("pelicula",Movies);
     this.eventoRepartidor.emit(uno);
   }

}
