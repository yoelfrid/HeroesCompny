import { Injectable } from '@angular/core';
import Trainers from '../../../assets/json/Trainers.json'
import { Trainer } from 'src/app/models/trainer.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Trainer | undefined;

  private trainersMock: Trainer[] = Trainers;

  login(email: string, password: string): Trainer | boolean {
    let user = this.trainersMock.find(user => user.email === email);

    if (user?.password === btoa(password)) {
      this.user = { ...user, password: '********' };
      localStorage.setItem('user', this.user.password)
      return this.user
    }
    return false;
  }

  logout() {
    localStorage.removeItem('user');
  }
}
