import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../auth/log-in/auth.service';
import { LoggerGuard } from './logger.guard';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,  private router: Router, private logger:LoggerGuard) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {

    let loggedIn = this.authService.user;
    if(loggedIn) {
      return true;
    }
    this.logger.info("login failed")
    this.router.navigate(['login'])

    return false;
    
  }

}

