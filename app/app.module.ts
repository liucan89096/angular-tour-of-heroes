import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent }  from './app.component';
import {DashboardComponent} from './Dashboard/dashboard.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailComponent} from './HeroDetailComponent/hero-detail.component';

import {HeroService} from'./hero.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  providers: [HeroService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
