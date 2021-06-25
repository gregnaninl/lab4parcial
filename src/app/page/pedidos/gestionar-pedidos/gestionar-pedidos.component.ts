import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/clases/pedido';
import { Piza } from 'src/app/clases/piza';
import { Repartidor } from 'src/app/clases/repartidor';
import { EmpleadosService } from 'src/app/servicio/empleados.service';
import { PedidosService } from 'src/app/servicio/pedidos.service';
import { PizzaService } from 'src/app/servicio/pizza.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestionar-pedidos',
  templateUrl: './gestionar-pedidos.component.html',
  styleUrls: ['./gestionar-pedidos.component.css']
})
export class GestionarPedidosComponent implements OnInit {

  listadoDeTablaRepartidores : Repartidor[];
  repartidorElegido : Repartidor;
  ListadoPizzasRep : Piza [];
  nuevoPedido : Pedido;
  listados : Piza[];


  constructor( private empleadoSvc : EmpleadosService,private pedidoSvc : PedidosService, private pizzaSvc : PizzaService) { }

  ngOnInit(): void {
    this.trarTodo();
    this.trarPisas();
    this.nuevoPedido= new Pedido();
    this.ListadoPizzasRep = new Array();
    this.nuevoPedido.pizzas = new Array();
  }

  cargarPedido(pedido : Pedido){
    this.pedidoSvc.Guardar(pedido)
      .then((res) => {
     console.log(res);
     this.nuevoPedido=null;
     this.trarPisas();
     Swal.fire('Correcto','pedido Cargado','success');
     
      }).catch(err => console.log('err', err.message));
  }

  trarPisas(){
    this.pizzaSvc.traerTodos().valueChanges().subscribe(
    (res)=>{
      this.listados = res;
      this. listados= this.listados.filter(dato => {
            
        return dato.estado== true  ;
       });;
    }
    );
   // console.log(this.listadoDeTablaPeliculas);
  }

  CargarRepartidor(repartidor : Repartidor){
    if(this.nuevoPedido.repartidor){
      if(this.nuevoPedido.pizzas.length > repartidor.capacidad){
        Swal.fire('Opps!!','No es posible asignar este repartidor por la capacidad','info');
      }else{
        this.nuevoPedido.repartidor = repartidor;
      }

    }else{
     // this.repartidorElegido= repartidor;
      this.nuevoPedido.repartidor = repartidor;
      console.log(this.repartidorElegido);
    }
   
  }

  trarTodo(){
    this.empleadoSvc.traerTodos().valueChanges().subscribe(
    (res)=>{
      this.listadoDeTablaRepartidores = res;
    }
    );
   // console.log(this.listadoDeTablaPeliculas);
  }

  cargarPizzas(pizza : Piza){
 
  if(this.nuevoPedido.repartidor){
    if(this.nuevoPedido.repartidor.capacidad > this.ListadoPizzasRep.length){
      this.ListadoPizzasRep.push(pizza);
      this.nuevoPedido.pizzas= this.ListadoPizzasRep;
    
      
   }else{
    Swal.fire('Opps!!','Ya no tiene mas espacio','info');
   }
    
  }else{
    Swal.fire('Opps!!','Primero tienes que cargar el Repartidor','info');
  }
 
  
 }

}
