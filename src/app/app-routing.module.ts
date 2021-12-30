import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './auth/log-in/log-in.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { AuthGuard } from './auth-guard.guard';
import { LogerGuard } from './loger.guard';

const routes: Routes = [
  { path: '', component: LogInComponent  , canActivate:[LogerGuard]},

  { path: 'login', component: LogInComponent , canActivate:[LogerGuard]},
  { path: 'heroes', component: HeroesListComponent, canActivate:[AuthGuard] },
  { path: 'hero', component: HeroComponent, canActivate:[AuthGuard] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
