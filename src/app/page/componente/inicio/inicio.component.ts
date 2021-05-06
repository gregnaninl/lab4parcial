import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/servicio/github.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public datosGitHub: object;

  constructor( private gitSvc : GithubService) { }

  ngOnInit(): void {
    this.traerDatos();
  }

  redirigir(){
    location.href= this.datosGitHub['html_url'];
  }

      
  public traerDatos(){
    this.gitSvc.getTodosLosPaises().subscribe(
    (res: any)=>{
     this.datosGitHub= res;

    },
    (error)=> console.log(error) 
    ); 
  }

}
