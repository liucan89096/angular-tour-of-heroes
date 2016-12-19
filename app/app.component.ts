import { Component } from '@angular/core';
import {OnInit} from '@angular/core';

import {HeroService} from './hero.service';

import {Hero} from './hero';

@Component({
  selector: 'my-app',
  // template: `<h1>Hello {{name}}</h1>`,
  templateUrl: './app/mainpage.html',
  styleUrls: ['./app/mainpage.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  heroes: Hero[];
  selectedhero: Hero;

  constructor(private heroservice: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroservice.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelected(hero: Hero): void {
    this.selectedhero = hero;
  }
}
