import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicio/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;

  constructor( private fb: FormBuilder,private router: Router, private loginSvc : LoginService ) { }

  ngOnInit(): void {
    this.initForm();
  }



  //implementacion Formulario
  private initForm():void{
    this.loginForm  = this.fb.group({
      email:['',[Validators.required, Validators.pattern(this.isEmail)]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(200)]],
    })
  }

   //cargar datos user
   onUserLogin(){
    this.loginForm.get('email')?.setValue('admin@gmail.com');
     this.loginForm.get('password')?.setValue('123456');
    }
 
    onTestLogin(){
     this.loginForm.get('email')?.setValue('empleado@gmail.com');
      this.loginForm.get('password')?.setValue('123456');
     }
   


  async onLogin() {
    if(this.loginForm?.valid){

    const { email, password } = this.loginForm.value;
        
    try {
      const user = await this.loginSvc.login(email, password);
      if (user) {
        this.checkUserIsVerified(user);
        }     
        } catch (error) {
      console.log(error);
        }
  
    }else{
    console.log('Formulario inconpleto');
    Swal.fire('Algo Salio Mal!','Revisa el contenido del formulario','error');    }
    }

  private checkUserIsVerified(user: any) {
    if (user.user) {
      this.router.navigate(['/']);
      console.log("ingresaste correctamente")
    } else if(user.code == "auth/wrong-password" ){
      Swal.fire('Contraseña incorrecta','Revise la contraseña ingresada','error'); 
    }else if(user.code == "auth/user-not-found" ){
      Swal.fire('Correo rechazado','Revise el correo ingresado','error'); 
    }else if(user.__zone_symbol__state) {;
      console.log(user);
      this.router.navigate(['/']);
      console.log("ingresaste correctamente")
      }
    else {;
      console.log(user);
      Swal.fire('Algo Salio Mal!','La contraseña o el correo son incorrectos, por favor vuelva a ingresarlos','error');   
      }
  }



}
