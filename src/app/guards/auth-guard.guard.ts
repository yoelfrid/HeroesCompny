import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoggerGuard } from './logger.guard';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private logger: LoggerGuard) { }

  canActivate(): boolean {

    if (localStorage.getItem('user')) {
      return true;
    }
    this.logger.info("login failed")
    this.router.navigate(['login'])

    return false;

  }

}

