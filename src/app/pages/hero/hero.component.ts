import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {

  hero = signal('Iron Man');
  age = signal(45);

  getHeroDescription(){
    return `${this.hero()} is ${this.age()} years old`;
  }

  changeHero(){
    this.hero.set('Spiderman');
    this.age.set(30);
  }

  resetHero(){
    this.hero.set('Iron Man');
    this.age.set(45);
  }

  changeAge(){
    this.age.update(current => current = 60);
  }



}
