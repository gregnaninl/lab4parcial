import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Pais } from 'src/app/clases/pais';
import { Repartidor } from 'src/app/clases/repartidor';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-altasrepartidor',
  templateUrl: './altasrepartidor.component.html',
  styleUrls: ['./altasrepartidor.component.css']
})
export class AltasrepartidorComponent implements OnInit {

  public formularioAlta : FormGroup;
  repartidor : Repartidor;
   
 
  constructor(private fb: FormBuilder,) {

    this.repartidor= new Repartidor();
   }

  ngOnInit(): void {

    this.formularioAlta = this.fb.group({
      'nombre': ['',Validators.required],
      'dni': ['',Validators.required],
      'edad': ['',Validators.required],
      'capacidad': ['',Validators.required],
      'unidad':[''],
      'pais': ['',Validators.required]
    });
  }

  public cargarPaisSleccionado(pais :any){
    this.formularioAlta.get('pais').setValue(pais.name);
    const paisrepartidor = {
      nombre:pais.name,
      bandera: pais.flag,
      region: pais.region
    };
    console.log(paisrepartidor);
    this.repartidor.pais= paisrepartidor;
  
  }


  GuardarActor(){

    if(this.formularioAlta.valid){  
     // this.cargarActor();
      try{
      
     // Swal.fire('Actor Enviado','Todo subio correctamente!!','success'); 
      }
      catch(e){
       
       // Swal.fire('Algo Salio Mal!',e,'error');  
      }
    }
  }

  private cargarActor(){
    this.repartidor.nombre = this.formularioAlta.get('nombre').value;
    this.repartidor.dni= this.formularioAlta.get('dni').value;
   
  }

}
