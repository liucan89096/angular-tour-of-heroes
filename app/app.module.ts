import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {HeroService} from './hero.service';

import { AppComponent }  from './app.component';
import {DashboardComponent} from './DashboardComponent/dashboard.component';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './HeroDetailComponent/hero-detail.component';

import {AppRoutingModule} from './app-routing.module';

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
