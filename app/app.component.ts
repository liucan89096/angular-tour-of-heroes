import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from './hero'

import {HeroService} from './hero.service';

@Component({
  selector: 'my-app',
  // template: `<h1>Hello {{name}}</h1>`,
  templateUrl: './app/mainpage.html',
  styleUrls: ['./app/mainpage.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit{
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero):void {
    this.selectedHero = hero;
  }
}
