import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroesRoutingModule} from "./heroes-routing.module";
import {HeroComponent} from "./hero/hero.component";
import {HeroesListComponent} from "./heroes-list/heroes-list.component";


@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModule
  ],
  declarations: [
    HeroComponent,
    HeroesListComponent,
  ]
})
export class HeroesModule {
}



