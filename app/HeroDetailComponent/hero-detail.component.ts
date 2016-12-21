/**
 * Created by 70243 on 2016/12/15.
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import {Hero} from '../hero';

import {HeroService} from '../hero.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  moduleId: module.id,
  templateUrl: './hero-detail.html',
})

export class HeroDetailComponent implements OnInit{
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
