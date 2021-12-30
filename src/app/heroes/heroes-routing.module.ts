import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesListComponent} from "./heroes-list/heroes-list.component";
import {AuthGuard} from "../guards/auth-guard.guard";
import {LoggerGuard} from "../guards/logger.guard";

const routes: Routes = [
   { path: '', component: HeroesListComponent, canActivate:[AuthGuard, LoggerGuard] },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }


