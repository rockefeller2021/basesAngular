import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [
    RouterLink, RouterLinkActive
  ],
  templateUrl: './navBar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent { }
