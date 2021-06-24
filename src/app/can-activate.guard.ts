import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {

  public user : any;

  constructor(private router: Router) {
    this.user = JSON.parse(localStorage.getItem("usuarioEnLinea"));

   }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isloginAdmin();
  }

  isloginAdmin(): boolean{
    
    if(this.user){
      console.log(this.user);
      if(this.user.email === 'admin@gmail.com'){
        console.log("1");
        return true;
        
      }else{
        this.router.navigate(['login']);
        console.log("2");
        return false;
      }
    }else{
      this.router.navigate(['login']);
      console.log("3");
      return false;
    }
  }
  
}
