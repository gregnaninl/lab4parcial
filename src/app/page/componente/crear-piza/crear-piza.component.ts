import { Component, OnInit , Output,EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Piza } from 'src/app/clases/piza';

@Component({
  selector: 'app-crear-piza',
  templateUrl: './crear-piza.component.html',
  styleUrls: ['./crear-piza.component.css']
})
export class CrearPizaComponent implements OnInit {

  public piza : Piza;
  public formularioAlta : FormGroup;
  @Output() eventoAltaPizza: EventEmitter<Piza> = new EventEmitter<Piza>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.piza= new Piza();

    this.formularioAlta = this.fb.group({
      'nombre': ['',Validators.required],
      'ingredientes': ['',Validators.required],
      'precio': ['',Validators.required],
      'peso': ['',[Validators.required,Validators.min(500),Validators.max(1000)]]      
    });
  }

  Guardar(){

    if(this.formularioAlta){
      this.piza.nombre= this.formularioAlta.get('nombre').value;
      this.piza.ingredientes = this.formularioAlta.get('ingredientes').value;
      this.piza.precio = this.formularioAlta.get('precio').value;
      this.piza.peso= this.formularioAlta.get('peso').value;
      this.piza.estado = true;
      this.piza.terminada = false;

      this.eventoAltaPizza.emit(this.piza);
      this.formularioAlta.reset();
    }

  }

}
