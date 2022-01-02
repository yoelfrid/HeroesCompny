import { Injectable } from '@angular/core';
import  Trainers  from '../../../assets/json/Trainers.json'
import { Trainer } from 'src/app/models/trainer.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Trainer | undefined;

  private trainersMock: Trainer[] = Trainers;

  login(email: string ,password:string): Trainer | boolean {
    let user = this.trainersMock.find(user => user.email === email);
  
    if(user?.password === btoa(password)){
      return this.user = {...user, password: '*****'};
    }    
    return false;
  }

  logout(){
    this.user = undefined;
  }
}
