import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/models/hero.interface';
import { HeroService } from '../hero.service';
import { LoggerGuard } from 'src/app/guards/logger.guard';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() hero: Hero
  isTrain:boolean
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {

    this.isTrain = this.heroService.user?.id == this.hero.trainer_id ? true : false     
  }

  isTrainer(hero: Hero, current_power: number) {

    this.heroService.isTrainer(hero, current_power)

  }

}
