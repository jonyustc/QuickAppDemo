import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  /**
   *
   */
  constructor(private authSerice:AuthService,private router:Router) {
    
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url : string = state.url;
    console.log('active guard called');
    debugger;
    return this.checkLogin(url);
  }

  checkLogin(url:string):boolean{
    if(this.authSerice.isAutherticate()){
      return true;
    }

    this.authSerice.redirectUrl= url;

    this.router.navigate(['login']);
    return false;

  }
  
}
