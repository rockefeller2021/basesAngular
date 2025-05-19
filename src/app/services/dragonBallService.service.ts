import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character-interface';

@Injectable({
  providedIn: 'root'
})
export class DragonBallService {

  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 15000
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 7500
    },
    {
      id: 3,
      name: 'Trunks',
      power: 1}
  ]);


  /*
    logica del output este metodo es el que llama
  */

addCharacter(character: Character){
  this.characters.update((list) => [...list, character]);
}

  constructor() { }

}
