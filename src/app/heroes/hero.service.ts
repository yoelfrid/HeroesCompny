import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.interface';
import { Trainer } from '../models/trainer.interface';
import { AuthService } from '../auth/log-in/auth.service';
import Heroes from '../../assets/json/heroes.json'

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  user: Trainer | undefined;
  private heroesMock: any[] = Heroes;
  max = 100

  constructor(private authService: AuthService) { }

  getHeroes(): Hero[] {
    this.user = this.authService.user;
    return this.heroesMock
  }

  isTrainer(trainer_id: number, hero: Hero, current_power: number) {
    // if (this.user?.id === trainer_id) {
      let randomnum = Math.random() * (this.max - current_power) + current_power / current_power;
      
      hero.current_power = Number( (hero.current_power +=randomnum).toFixed(2));
      // hero.current_power 
      if (hero.current_power >= this.max) {
        hero.current_power = 100;
        // alert("The hero is ready for any task")
        return
      }
      return this.heroesMock.sort((a: Hero,b: Hero) => a.current_power - b.current_power).reverse()
    }
  //   else
  //     alert("He's not your hero")
  //     return false
  // }
}
