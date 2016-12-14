import { Component } from '@angular/core';

import { Hero } from './hero'

import {HeroService} from './hero.service';

@Component({
  selector: 'my-app',
  // template: `<h1>Hello {{name}}</h1>`,
  templateUrl: './app/mainpage.html',
  styleUrls: ['./app/mainpage.css']
})
export class AppComponent  {
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero):void {
    this.selectedHero = hero;
  }
}
