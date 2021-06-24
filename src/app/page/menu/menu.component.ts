import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicio/login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

 

  public isLogged: boolean = false;
  public user : any;
  public user$ : Observable<any> = this.loginSvc.afAuth.user;

  constructor(private loginSvc : LoginService,private router: Router) {
    this.user = localStorage.getItem("usuarioEnLinea");
    console.log(this.loginSvc.getCurretUser());

   }

  ngOnInit(): void {
   /* this.isLogin = this.loginSvc.traerLocalStorage();
    this.notlogin = this.loginSvc.traerNoLogin();
    console.log(this.isLogin);
    console.log(this.notlogin);*/
  }


  async onLogout() {
    try {
      await this.loginSvc.logout();
      this.router.navigate(['login']);
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  }



  salir(){
    this.loginSvc.salir();
    localStorage.clear();
  }

}
