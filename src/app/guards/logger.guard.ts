import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoggerGuard implements CanActivate {
  canActivate() {
    console.log("Succeeded ");
    return true;
  }

  info(msg: string) {
    console.log(msg);

  }
}
