import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {HeroService} from './hero.service';

import {Hero} from './hero';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  // template: `<h1>Hello {{name}}</h1>`,
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedhero: Hero;

  constructor(
    private heroservice: HeroService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroservice.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelected(hero: Hero): void {
    this.selectedhero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedhero.id]);
  }
}
