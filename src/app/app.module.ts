import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth-guard.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal'


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HeroComponent,
    HeroesListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
