import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Piza } from 'src/app/clases/piza';

@Component({
  selector: 'app-modificar-piza',
  templateUrl: './modificar-piza.component.html',
  styleUrls: ['./modificar-piza.component.css']
})
export class ModificarPizaComponent implements OnInit {

  @Input() pizzaParaMostrar: Piza;
  @Output() eventoModificarPizza: EventEmitter<Piza> = new EventEmitter<Piza>();
  public formularioAlta : FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.formularioAlta = this.fb.group({
      'ingredientes': ['',Validators.required],
      'precio': ['',Validators.required],
      'peso': ['',[Validators.required,Validators.min(500),Validators.max(1000)]]      
    });
  }

  modificar(){
    if(this.pizzaParaMostrar){
      this.eventoModificarPizza.emit(this.pizzaParaMostrar);
    }
  }

  Guardar(){
    this.eventoModificarPizza.emit(this.pizzaParaMostrar);
  }

}
