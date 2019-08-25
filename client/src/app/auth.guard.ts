import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      let sessionData = JSON.parse(sessionStorage.getItem('sessionData'))
      console.log("In AuthGuard" , sessionData);
      if(sessionData != null && sessionData['isLogin']==true){
        return true;
      }else{
        return false;
      }
    
  }
 
  
}
