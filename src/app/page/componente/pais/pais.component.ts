import { Component, OnInit , Output ,EventEmitter} from '@angular/core';
import { Pais } from 'src/app/clases/pais';
import { PaisService } from 'src/app/servicio/pais.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  lista : any;
  listaPaises :object;
  paisElegido : Pais;

  @Output() eventoCargarPais: EventEmitter<Pais>= new EventEmitter<Pais>();

  constructor(private paisSvc: PaisService) { 
    this.paisElegido= new Pais;
   
    }
  
    ngOnInit(): void {
    this.traerTodos();
    }
  
    public traerTodos(){
      this.paisSvc.getTodosLosPaises().subscribe(
      (res: any)=>{
       this.listaPaises= res;
      },
      (error)=> console.log(error) 
      ); 
  
     
      }
  
      GuardarPais(pais:Pais){
      this.paisElegido=pais;
       this.eventoCargarPais.emit(this.paisElegido); 
             // console.log(this.paisElegido); 
      }
  
}
