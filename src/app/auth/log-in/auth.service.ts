import { Injectable } from '@angular/core';
import  Trainers  from '../../../assets/json/Trainers.json'
import { Trainer } from 'src/app/models/trainer.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  onePassword: string
  public user: Trainer | undefined;

  // mock server data
  private _trainersMock: Trainer[] = Trainers;

a:string |undefined
  login(email: string ,password:string): Trainer | boolean {
    const user = this._trainersMock.find(user => user.email === email);

    
    if(user?.password === btoa(password)){
      this.user = user;
      return {...user, password: '*****'};
    }

    return false;
  }

  logout(){
    this.user = undefined;
  }
}
