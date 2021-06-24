import { Component, OnInit } from '@angular/core';
import { Piza } from 'src/app/clases/piza';
import { PizzaService } from 'src/app/servicio/pizza.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-salen-pizas',
  templateUrl: './salen-pizas.component.html',
  styleUrls: ['./salen-pizas.component.css']
})
export class SalenPizasComponent implements OnInit {

  listadoPizzas : Piza[]; 
  modificarPizza : Piza;
  PizzaParaBorrar : Piza;

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

  eventoPiza(nueva:Piza){
    console.log(nueva);
    this.pizzaSvc.Guardar(nueva)
        .then((res) => {
       console.log(res);
       Swal.fire('Correcto','alta completa','success');
        }).catch(err => console.log('err', err.message));
    
  }

  pizzaElegida(elegida :Piza){  
    this.PizzaParaBorrar= null;  
    this.modificarPizza=elegida;
  }

  pizzaModificada(modificada : Piza){
   this.pizzaSvc.update(modificada);
   this.modificarPizza= null;
   Swal.fire('Correcto','Pizza Actualizada','success');

  }
  

  borrarPizza(borrada : Piza){
    borrada.estado=false;
    this.pizzaSvc.update(borrada);
    this.PizzaParaBorrar= null;
    Swal.fire('Correcto','Pizza Borrad','success');
  }

  sacarPizza(elegida: Piza){
    this.modificarPizza= null;
    this.PizzaParaBorrar= elegida;
    
  }

  

}
