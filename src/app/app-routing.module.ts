import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login', loadChildren: () => import('./auth/auth-module').then( m => m.AuthModule)
  },
  {
    path: 'heroes', loadChildren:() => import('./heroes/heroes-module').then( m => m.HeroesModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
