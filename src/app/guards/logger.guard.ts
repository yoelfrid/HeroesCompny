import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggerGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("Succeeded ");
    return true;
  }

  info(msg: string) {
    console.log(msg);

  }
}
