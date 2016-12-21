/**
 * Created by 70243 on 2016/12/21.
 */
import {Component, OnInit} from '@angular/core';

import {HeroService} from '../hero.service';

import {Hero} from '../hero';

@Component({
  selector: 'my-dashboared',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})

export class DashboardComponent implements OnInit{
  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1,5));
  }
}
