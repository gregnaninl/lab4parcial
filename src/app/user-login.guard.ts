import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UserLoginGuard implements CanActivate {

  public user : any;

  constructor(private router: Router) {
    this.user = JSON.parse(localStorage.getItem("usuarioEnLinea"));

   }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.islogin();
  }

  islogin(): boolean{
    this.user = JSON.parse(localStorage.getItem("usuarioEnLinea"));
    if(this.user){
      console.log(this.user);    
        return true;     
    
    }else{
      Swal.fire('Opps!!','Tenes que estar logueado','info');
      this.router.navigate(['login']);
    //  console.log("3");
      return false;
    }
  }
  
}
