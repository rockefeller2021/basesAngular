import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { Character } from '../../../../interfaces/character-interface';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {

name = signal('');
power = signal(0);

newCharacter = output<Character>();



//Este es el que agrago al list
addCharacter(){
  if( !this.name() || !this.power() || this.power() <= 0){
    return;
  }
  const newCharacter: Character = {
    id: Math.floor(Math.random() * 1000),
    name: this.name(),
    power: this.power()
  };

  this.newCharacter.emit(newCharacter);

  //this.characters.update(characters => [...characters, newCharacter]);

  console.log(newCharacter);

  //this.characters.update(characters => [...characters, newCharacter]);
  this.name.set('');
  this.power.set(0);
}
}
