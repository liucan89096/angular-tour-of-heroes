import { Component } from '@angular/core';

export class Hero {
  id : number;
  name : string;
}

@Component({
  selector: 'my-app',
  // template: `<h1>Hello {{name}}</h1>`,
  templateUrl: './template/mainpage.html'
})
export class AppComponent  {
  hero: Hero = {
    id: 1,
    name: 'Max_LIU'
  };
}
