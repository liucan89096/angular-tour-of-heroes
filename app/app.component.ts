import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from './hero'

import {HeroService} from './hero.service';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

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
