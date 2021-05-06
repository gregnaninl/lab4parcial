import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from '../clases/usuario';

import { first, switchMap } from 'rxjs/operators';

import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isLogguedIn : boolean = false;
  public user! : Usuario;

  constructor(private router: Router ,public afAuth: AngularFireAuth, private afs: AngularFirestore) { }


  ingrersar( user: string, pass :string){

    if(user==="admin@gmail.com" && pass=== "123456" ){
     this.isLogguedIn = true;
      console.log("ingresaste correctamente");
      //guardo el log si ingresa ok       

      localStorage.setItem("usuarioEnLinea",JSON.stringify(user));
      this.router.navigate(['/']);
    }else if(  user==="empleado@gmail.com" && pass=== "123456"   ){
      this.isLogguedIn = true;
      console.log("ingresaste correctamente");
      //guardo el log si ingresa ok       

      localStorage.setItem("usuarioEnLinea",JSON.stringify(user));
      this.router.navigate(['/']);
    }
    else{
      Swal.fire('Correo rechazado','Revise el correo ingresado','error'); 
    }
 }

   salir(){
     localStorage.clear();
     this.isLogguedIn = false;
   }


   traerLocalStorage() : boolean{
    if(localStorage.getItem("usuarioEnLinea")){
      return true;
    }else{
      return false
    }
   }

    traerNoLogin() : boolean{
      if(localStorage.getItem("usuarioEnLinea")){
        return false;
      }else{
        return true;
      }

  }

  async login(email: string, password:string){
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(
        email, 
        password);
        return result;
    }
    catch(e){
    console.log(e);
//    Swal.fire('Algo Salio Mal!',e,'error');   
    return e; 
    }    
        
  }

  async logout(){
    try{
      await this.afAuth.signOut();  
    }
    catch(e){
      //Swal.fire('Algo Salio Mal!',e,'error');    
    }
  
  }

  getCurretUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }




}
