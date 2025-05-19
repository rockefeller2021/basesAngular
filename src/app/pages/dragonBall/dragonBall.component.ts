import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormComponent } from "../../components/shared/dragonBall/form/form.component";
import { ListPersonComponent } from "../../components/shared/dragonBall/listPerson/listPerson.component";
import { Character } from '../../interfaces/character-interface';
import { DragonBallService } from '../../services/dragonBallService.service';




@Component({
  selector: 'app-dragon-ball',
  imports: [ListPersonComponent, FormComponent],
  templateUrl: './dragonBall.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonBallComponent {

  /**
   * @injecto service al componente padre
   */

  public dragonBallaService = inject(DragonBallService);

  //constructor(public dragonBallService: DragonBallService){}









}
