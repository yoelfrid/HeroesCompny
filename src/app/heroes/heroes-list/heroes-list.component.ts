import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from 'src/app/models/hero.interface';
import { Router } from '@angular/router';
import { Trainer } from 'src/app/models/trainer.interface';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  heroes: Hero[] = []
  heroesYour: Hero[] = []
  userName: Trainer | undefined
  
  constructor(private heroService: HeroService, private router: Router
  ) { }

  ngOnInit(): void {
    this.heroes = this.sortArray(this.heroService.getHeroes());
    this.userName = this.heroService.user
  }

  sortArray(array: Hero[]) {
    return array.sort((a: Hero, b: Hero) => a.current_power - b.current_power).reverse();
  }

  sortArrayByAll() {
    this.heroes = this.sortArray(this.heroService.getHeroes()).sort((a: Hero, b: Hero) => a.current_power - b.current_power).reverse();
    return this.heroes
  }

  sortArrayByYour() {
    this.heroesYour = this.heroes.filter(hero => hero.trainer_id == this.userName?.id)
    this.heroes = this.heroesYour
    console.log("this.heroesYour ", this.heroesYour);
  }
  logOut() {
    this.heroService.logOut();
    this.router.navigate(['login'])
  }
}
