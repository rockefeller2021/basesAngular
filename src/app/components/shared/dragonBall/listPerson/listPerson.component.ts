import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Character } from '../../../../interfaces/character-interface';

@Component({
  selector: 'app-list-person',
  imports: [],
  templateUrl: './listPerson.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPersonComponent {
characters = input<Character[]>();
listName = input<string>();


}
