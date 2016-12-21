/**
 * Created by 70243 on 2016/12/19.
 */
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {HeroService} from './hero.service';

import {Hero} from './hero';

@Component({
  selector: 'my-heroes',
  moduleId: module.id,
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedhero: Hero;

  constructor(
    private router: Router,
    private heroservice: HeroService
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
