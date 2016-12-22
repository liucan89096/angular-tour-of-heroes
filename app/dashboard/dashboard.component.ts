/**
 * Created by 70243 on 2016/12/22.
 */
import {Component, OnInit} from '@angular/core';

import {Hero} from '../hero';

import {HeroService} from '../hero-service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(0,4));
  }


}
