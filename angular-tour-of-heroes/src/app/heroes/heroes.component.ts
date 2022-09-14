import { Component, OnInit } from '@angular/core';
//always import Component from angular core

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

//always export the component
export class HeroesComponent implements OnInit {
  //add a hero property
  hero: Hero = {
    id: 1,
    name: 'Zhongli',
  };
  constructor() {}

  ngOnInit(): void {
    //ngOnInit is a lifestyle hook. angular calls it shortly after creating a component
    //good to place initialization logic
  }
}
