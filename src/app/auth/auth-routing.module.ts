import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogInComponent} from "./log-in/log-in.component";
import {LoggerGuard} from "../guards/logger.guard";



const routes: Routes = [
  { path: '', component: LogInComponent , canActivate:[LoggerGuard]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }


