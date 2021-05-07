import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Pais } from 'src/app/clases/pais';
import { Repartidor } from 'src/app/clases/repartidor';
import { EmpleadosService } from 'src/app/servicio/empleados.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-altasrepartidor',
  templateUrl: './altasrepartidor.component.html',
  styleUrls: ['./altasrepartidor.component.css']
})
export class AltasrepartidorComponent implements OnInit {

  public formularioAlta : FormGroup;
  repartidor : Repartidor;
   
 
  constructor(private fb: FormBuilder,private empleadoSvc : EmpleadosService) {

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
      this.cargarRepartidor();
      try{
        this.empleadoSvc.GuardarEmpleado(this.repartidor);
        this.formularioAlta.reset();
      Swal.fire(' Enviado','Todo subio correctamente!!','success'); 
      }
      catch(e){
       
       Swal.fire('Algo Salio Mal!',e,'error');  
      }
    }
  }

  private cargarRepartidor(){
    this.repartidor.nombre = this.formularioAlta.get('nombre').value;
    this.repartidor.dni= this.formularioAlta.get('dni').value;
    this.repartidor.capacidad = this.formularioAlta.get('capacidad').value;
    this.repartidor.edad = this.formularioAlta.get('edad').value;
    if(this.formularioAlta.get('unidad').value =="" ){
      this.repartidor.unidad = false;
    }else{
      this.repartidor.unidad = true;
    }

    
    
    
   
  }

}
