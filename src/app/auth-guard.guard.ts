import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth/log-in/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,  private router: Router) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // check if user logged in
    let loggedIn = this.authService.user;
    console.log("loggedIn ",loggedIn);
    if(loggedIn) {
      
      return true;
    }
    this.router.navigate(['login'])
    return false;
    
  }

}

