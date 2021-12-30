import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.interface';
import { Trainer } from '../models/trainer.interface';
import { AuthService } from '../auth/log-in/auth.service';
import Heroes from '../../assets/json/heroes.json'
import { LoggerGuard } from '../guards/logger.guard';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  user: Trainer | undefined;
  private heroesMock: any[] = Heroes;
  max = 100

  constructor(private authService: AuthService,
     private logger: LoggerGuard) { }

  getHeroes(): Hero[] {
    this.user = this.authService.user;
    
    return this.heroesMock
  }

  isTrainer(hero: Hero, current_power: number) {
      if (hero.current_power == this.max) {
        alert("The hero is ready for any task")
        return
      }
      let random = Math.random() * (this.max - current_power);
      
      this.logger.info("Trainer of hero! ")
      hero.current_power = Number((hero.current_power += random).toFixed(2));
      if (hero.current_power >= this.max) {
        hero.current_power = this.max;
      }
      return this.heroesMock.sort((a: Hero,b: Hero) => a.current_power - b.current_power).reverse()
    }
}
