/**
 * Created by 70243 on 2016/12/14.
 */
import {Injectable} from '@angular/core';

import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): void {
    return HEROES;
  }
}
