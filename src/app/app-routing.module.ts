import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './auth/log-in/log-in.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { LoggerGuard } from './guards/logger.guard';

const routes: Routes = [
  { path: '', component: LogInComponent  , canActivate:[LoggerGuard]},

  { path: 'login', component: LogInComponent , canActivate:[LoggerGuard]},
  { path: 'heroes', component: HeroesListComponent, canActivate:[AuthGuard, LoggerGuard] },
  { path: 'hero', component: HeroComponent, canActivate:[AuthGuard, LoggerGuard] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
