import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/clases/pais';
import { Repartidor } from 'src/app/clases/repartidor';
import { EmpleadosService } from 'src/app/servicio/empleados.service';

@Component({
  selector: 'app-repartidores',
  templateUrl: './repartidores.component.html',
  styleUrls: ['./repartidores.component.css']
})
export class RepartidoresComponent implements OnInit {

  listadoDeTablaRepartidores : Repartidor[];
  repartidorElegido : Repartidor;
  paisReaprtidor : Pais;

  constructor( private empleadoSvc : EmpleadosService) { }

  ngOnInit(): void {
    this.trarTodo();
  }

  CargarRepartidor(repartidor : Repartidor){
    this.repartidorElegido= repartidor;
    this.paisReaprtidor= repartidor.pais;
  }

  trarTodo(){
    this.empleadoSvc.traerTodos().valueChanges().subscribe(
    (res)=>{
      this.listadoDeTablaRepartidores = res;
    }
    );
   // console.log(this.listadoDeTablaPeliculas);
  }

}
