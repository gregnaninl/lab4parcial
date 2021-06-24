import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pedido } from 'src/app/clases/pedido';
import { PedidosService } from 'src/app/servicio/pedidos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-pedido',
  templateUrl: './form-pedido.component.html',
  styleUrls: ['./form-pedido.component.css']
})
export class FormPedidoComponent implements OnInit {

  @Input() pedidoParaMostrar : Pedido;
  @Output() eventoPedido: EventEmitter<Pedido> = new EventEmitter<Pedido>();

  constructor( private pedidoSvc : PedidosService) { }

  ngOnInit(): void {

  }


  guardar(){
    

    if(this.pedidoParaMostrar.pizzas.length > 0){
      this.eventoPedido.emit(this.pedidoParaMostrar);
      

    }else{
      Swal.fire('Opps!!','tienes que cargar al menos una pizza','info');
    }
  }

}
