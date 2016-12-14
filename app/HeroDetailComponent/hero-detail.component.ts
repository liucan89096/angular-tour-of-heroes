/**
 * Created by 70243 on 2016/12/14.
 */
<<<<<<< HEAD
import {Component} from '@angular/core';
import {Input} from '@angular/core';
=======
import { Component } from '@angular/core';
import { Input } from '@angular/core';
>>>>>>> services

import { Hero } from '../hero';

@Component({
  selector: 'hero-detail',
<<<<<<< HEAD
  templateUrl: './app/HeroDetailComponent/herodetail.html'
})

export class HeroDetailComponent{
=======
  templateUrl: './app/HeroDetailComponent/hero-detail.html'
})

export class HeroDetailComponent {
>>>>>>> services
  @Input()
  hero: Hero;
}
