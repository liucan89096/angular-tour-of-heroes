/**
 * Created by 70243 on 2016/12/14.
 */
import {Component} from '@angular/core';
import {Input} from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './app/HeroDetailComponent/herodetail.html'
})

export class HeroDetailComponent{
  @Input()
  hero: Hero;
}
