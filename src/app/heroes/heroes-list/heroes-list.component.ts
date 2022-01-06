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
userName:  Trainer | undefined
  constructor(private heroService: HeroService, private router: Router
  ) { }

  ngOnInit(): void {
    this.heroes = this.sortArray(this.heroService.getHeroes());
    this.userName = this.heroService.user
  }

  sortArray(array: Hero[]) {
    return array.sort((a: Hero, b: Hero) => a.current_power - b.current_power).reverse();
  }

  logOut() {
    this.heroService.logOut();
    this.router.navigate(['login'])
  }
}
