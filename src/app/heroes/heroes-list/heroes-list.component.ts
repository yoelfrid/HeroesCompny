import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from 'src/app/models/hero.interface';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  heroes: Hero[] = []

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes = this.sortArray(this.heroService.getHeroes());
  }
  
  sortArray(array: Hero[]) {
    return array.sort((a: Hero, b: Hero) => a.current_power - b.current_power).reverse();
  }

}
