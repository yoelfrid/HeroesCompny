import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {LogInComponent} from "./log-in/log-in.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {AuthGuard} from "../guards/auth-guard.guard";



@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [LogInComponent],
  providers: [AuthGuard],

})
export class AuthModule {
}
